import { NextRequest, NextResponse } from "next/server";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";
import { Order } from "@/models/order.model";
import { User } from "@/models/user.model";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, {params}: any){
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    try {
        const userMail = request.nextUrl.searchParams.get('userEmail');
        let whereJson = {
          email : userMail
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
        return NextResponse.json({ isSuccess: false, error: String(error) }, { status: 500 });
      }
}