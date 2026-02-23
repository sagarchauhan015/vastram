import { NextResponse } from "next/server";
import { Sequelize } from "sequelize";
// Force tedious to be bundled
import * as tedious from "tedious";
const _tediousCheck = tedious.Connection;

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
    
    let dbStatus = 'not tested';
    let dbError = null;
    
    try {
        const sequelize = new Sequelize(
            process.env.DB_NAME!,
            process.env.DB_USERNAME!,
            process.env.DB_PASSWORD!,
            {
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT || '1433'),
                dialect: 'mssql',
                dialectOptions: {
                    options: {
                        encrypt: true,
                        trustServerCertificate: false,
                        connectTimeout: 15000,
                    }
                },
                logging: false,
            }
        );
        
        await sequelize.authenticate();
        dbStatus = 'connected';
        await sequelize.close();
    } catch (err: any) {
        dbStatus = 'failed';
        dbError = err.message;
    }
    
    return NextResponse.json({ 
        status: 'ok',
        env: envCheck,
        db: { status: dbStatus, error: dbError },
        timestamp: new Date().toISOString()
    });
}
