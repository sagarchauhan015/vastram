import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/libs/Stripe/stripe";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth/authOptions';
import { User } from "@/models/user.model";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    
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
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/order`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
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