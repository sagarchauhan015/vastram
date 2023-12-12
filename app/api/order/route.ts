import { NextRequest, NextResponse } from "next/server";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";
import { Order } from "@/models/order.model";
import { User } from "@/models/user.model";

import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';


// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();

export async function GET(request: NextRequest, {params}: any){
    try {
        // const productId = request.nextUrl.searchParams.get('productId');
        const data = await request.json();
        let whereJson = {
          email : 'ram@gmail.com'
        }
        let queryJson = {
          where: whereJson,
          attributes: ['Id', 'email'],
          include: [
            {
              model: Order,
              as: 'orders',
              required: false, // This ensures a LEFT JOIN
            }
          ]
        }
        const items = await User.findAll(queryJson);
        
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