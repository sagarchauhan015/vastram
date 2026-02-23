import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { User } from "@/models/user.model";
import {intializeConnection, syncDatabase} from '@/utils/databaseUtils/databaseUtils';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

export async function POST(request : NextRequest){
    // Initialize database connection
    await intializeConnection();
    await syncDatabase();
  try {
      const data = await request.json();
      data['password'] = await bcrypt.hash(data.password, 6);
      data['confirmPassword'] = await bcrypt.hash(data.confirmPassword, 6);

      let whereJson = {
        email: data.email
      }
      let queryJson = {
        where: whereJson
      }
      const findUser = await User.findOne(queryJson);

      if(!findUser){
        const userDetails = await User.create(data);
        let response = {
          isSuccess: true,
          data : 'dataArray',
          status: 200
        }
        return NextResponse.json(response)
      }

      let response = {
          isSuccess: false,
          data : 'Email Already Exist, Try Login',
          status: 400
      }
      return NextResponse.json(response)
    } catch (error) {
      return NextResponse.json({ isSuccess: false, error: String(error) }, { status: 500 });
    }
}
