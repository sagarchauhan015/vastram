import { Product } from "@/models/product.model";
import { NextResponse } from 'next/server';
import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';


// Build connection with database
intializeConnection();


export async function POST(request : any){
    const data = await request.json();
    await Product.create(data);
    return NextResponse.json({message: "Item created"}, {status: 201})
}


// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();
