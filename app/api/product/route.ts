import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextRequest, NextResponse } from "next/server";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, {params}: any){
    try {
        // Initialize database connection
        await intializeConnection();
        await syncDatabase();
        
        const productId = request.nextUrl.searchParams.get('productId');
        
        // Build query - only filter by Id if productId is provided
        let queryJson: any = {
          include: [
            {
              model: Size,
              as: 'sizes',
              required: false, // This ensures a LEFT JOIN
            }
          ]
        };
        
        // Only add where clause if productId is specified
        if (productId) {
          queryJson.where = { Id: productId };
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