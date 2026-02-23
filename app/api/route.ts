import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';
import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextResponse } from 'next/server';
import { jsonUtils } from '@/utils/jsonUtils/jsonUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function GET() {
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    try {
        let whereJson = {
            order: [['createdAt', 'DESC']],
            // category : 'men',
            // limit: 10,
        }
        let queryJson = {
          // where: whereJson,
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
        return NextResponse.json({ isSuccess: false, error: String(error) }, { status: 500 });
      }
}