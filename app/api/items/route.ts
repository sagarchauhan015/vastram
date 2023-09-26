import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';
import { User } from '@/models/user.model';
import { NextResponse } from 'next/server';

intializeConnection();
sequelize.sync();


export async function POST(request){
    const data = await request.json();
    await User.create(data);
    return NextResponse.json({message: "Item created"}, {status: 201})
}