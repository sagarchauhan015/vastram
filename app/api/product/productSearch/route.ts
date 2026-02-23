import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";
import { NextRequest, NextResponse } from "next/server";
import { jsonUtils } from "@/utils/jsonUtils/jsonUtils";
import { Op } from "sequelize";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest, {params}: any){
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
    try {
        const searchQuery = request.nextUrl.searchParams.get('query');
        let keyword = `%${searchQuery}%`;
        let whereJson = {
            [Op.or]: [
                {
                description: {
                    [Op.like]: keyword
                }
                },
                {
                productInfo: {
                    [Op.like]: keyword
                }
                }
            ]
        }
        let attributesJson = ['Id', 'productName', 'category', 'subCategory', 'createdAt', 'updatedAt']
        let queryJson = { where: whereJson, attributes: attributesJson}
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