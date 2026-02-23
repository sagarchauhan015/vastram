import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    const envCheck = {
        DB_HOST: process.env.DB_HOST ? 'SET' : 'MISSING',
        DB_NAME: process.env.DB_NAME ? 'SET' : 'MISSING',
        DB_USERNAME: process.env.DB_USERNAME ? 'SET' : 'MISSING',
        DB_PASSWORD: process.env.DB_PASSWORD ? 'SET (masked)' : 'MISSING',
        DB_PORT: process.env.DB_PORT || 'DEFAULT 1433',
        NODE_ENV: process.env.NODE_ENV || 'not set',
    };
    
    return NextResponse.json({ 
        status: 'ok',
        env: envCheck,
        timestamp: new Date().toISOString()
    });
}
