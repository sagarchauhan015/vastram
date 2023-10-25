import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from 'next/server';

import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';

// Define the association
// Product.hasMany(Size, { foreignKey: 'productId', as: 'sizes' });
// // You can also define the reverse association if needed
// Size.belongsTo(Product, { foreignKey: 'productId', as: 'product' });


// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();

export async function POST(request : any){
    try {
        const data = await request.json();
        const product = await Product.create(data);
        const sizeData = data.size.map((sizeValue: any) => ({
          productId: product.get('Id'),
          size: sizeValue,
        }));
    
        // Use bulkCreate to insert multiple size entries
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

