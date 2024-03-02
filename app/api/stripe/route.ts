import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/libs/Stripe/stripe";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from "@/models/user.model";

export async function POST(request: NextRequest) {
    try {
        let data = await request.json();
        const checkoutPrice = data.cartPrice;

        const userSession =  await getServerSession(authOptions);

        if(!userSession){
            return NextResponse.json('/login');
        }

        let whereJson = {
            email : userSession.user?.email
        }
        let queryJson = {
            where : whereJson
        }
        const userObj = await User.findOne(queryJson); 

        const userId =  userObj?.dataValues.Id;


        const session  =  await stripe.checkout.sessions.create({
            line_items: [
                {
                price_data: {
                    currency: 'inr',
                    product_data: {
                    name: 'Cart Checkout',
                    },
                    unit_amount: checkoutPrice*100,
                    tax_behavior: 'exclusive',
                },
                quantity: 1,
                },
            ],
            currency: 'inr',
            mode: "payment",
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
            phone_number_collection: {
                enabled: true,
            },
            billing_address_collection: 'required',
            success_url: `${process.env.PROD_APP_URL}/order`, //'http://localhost:3000/order',
            cancel_url: `${process.env.PROD_APP_URL}/dashboard`, //'http://localhost:3000/dashboard',
            metadata: {
                userId
            }
        })
        return NextResponse.json(session.url);
    } catch (error) {
        console.error("Error creating Stripe checkout session:", error);
        return NextResponse.error();
    }
}