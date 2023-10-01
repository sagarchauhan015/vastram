import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from "next/server";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";

import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';

// Define the association
Product.hasMany(Size, { foreignKey: 'productId', as: 'sizes' });
// You can also define the reverse association if needed
Size.belongsTo(Product, { foreignKey: 'productId', as: 'product' });


// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();

export async function GET(request : any, {params} : any){
    try {
        let whereJson = {
          category : params.category
        }
        let queryJson = {
          where: whereJson,
          include: [
            {
              model: Size,
              as: 'sizes',
              required: false, // This ensures a LEFT JOIN
            }
          ]
        }
        const items = await Product.findAll(queryJson);
        
        let dataArray = jsonUtils.convertArrayofModeltoDataArray(items);

        let response = {
            isSuccess: true,
            data : dataArray,
            status: 200
        }
        return NextResponse.json(response)
      } catch (error) {
        return { isSuccess: false, error: error };
      }
}