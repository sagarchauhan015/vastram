import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/libs/Stripe/stripe";
import { Order } from "@/models/order.model";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    
    const body =  await request.text();
    const headersList = await headers();
    const signature = headersList.get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error) {
        return NextResponse.json(`Webhook Error`, {status: 400})
    }

    const session  = event.data.object as Stripe.Checkout.Session;

    if(event.type === "checkout.session.completed"){
        // This code helps to get the details based on payment intent 
        // const payment = await stripe.paymentIntents.retrieve(
        //     session.payment_intent as string
        // )

        if(!session?.metadata?.userId){
            return new NextResponse("user id is required", {status: 400})
        }

        const orderAmt = JSON.stringify(session.amount_subtotal!/100);
        const shippingAdd = JSON.stringify(session.shipping_details?.address?.city)

        await Order.create({
            userId: session?.metadata?.userId,
            paymentId: session.payment_intent,
            paymentStatus: session.status,
            orderStatus: 'Pending',
            orderAmount:  orderAmt,
            phoneNumber: session.customer_details?.phone,
            shippingAddress:  shippingAdd
        })

    }

    return new NextResponse(null, {status: 200})
     
}