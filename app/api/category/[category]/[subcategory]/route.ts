import { Product } from "@/models/product.model";
import { NextResponse } from "next/server";

export async function GET(request : any, {params} : any){
    try {
        console.log(params);
        let queryJson = {
            category : params.category,
            subCategory: params.subcategory
        }
        const items = await Product.findAll({where: queryJson})
        let response = {
            isSuccess: true,
            data : items,
            status: 200
        }
        // return response;
        return NextResponse.json(response)
      } catch (error) {
        return { isSuccess: false, error: error };
      }
}