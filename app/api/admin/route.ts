import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from 'next/server';

import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';


intializeConnection();
sequelize.sync();

export async function POST(request : any){
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
        return { isSuccess: false, error: error };
      }
}

