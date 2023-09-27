import { User } from '@/models/user.model';
import { NextResponse } from 'next/server';


export async function POST(request : any){
    const data = await request.json();
    await User.create(data);
    return NextResponse.json({message: "Item created"}, {status: 201})
}