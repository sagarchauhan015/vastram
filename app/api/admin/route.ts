import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from 'next/server';
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function POST(request : any){
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    try {
        const data = await request.json();
        const product = await Product.create(data);
        const sizeData = data.size.map((sizeValue: any) => ({
          productId: product.get('Id'),
          size: sizeValue,
        }));
    

        await Size.bulkCreate(sizeData);
        let response = {
            isSuccess: true,
            status: 201
        }
        return NextResponse.json(response)
      } catch (error) {
        return NextResponse.json({ isSuccess: false, error: String(error) }, { status: 500 });
      }
}

