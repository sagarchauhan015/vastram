import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from 'next/server';



export async function POST(request : any){
    const data = await request.json();
    const product = await Product.create(data);
    const sizeData = data.size.map((sizeValue : any) => ({
        productId: product.get('Id'),
        size: sizeValue,
    }));

    // Use bulkCreate to insert multiple size entries
    await Size.bulkCreate(sizeData);
    return NextResponse.json({message: "Item created"}, {status: 201})
}

