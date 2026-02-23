import { Sequelize, Options } from "sequelize";

// Azure SQL Server Configuration
const dbHost = process.env.DB_HOST || '';
const dbName = process.env.DB_NAME || '';
const dbUsername = process.env.DB_USERNAME || '';
const dbPassword = process.env.DB_PASSWORD || '';
const dbPort = parseInt(process.env.DB_PORT || '1433');

// Check if we're in a build environment
const isBuildTime = process.env.NODE_ENV === 'production' && !dbHost;

// Sequelize configuration
const sequelizeOptions: Options = {
    host: dbHost || 'localhost',
    port: dbPort,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: false,
            enableArithAbort: true
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false
};

// Create sequelize instance - it won't connect until authenticate() is called
export const sequelize = new Sequelize(
    dbName || 'tempdb',
    dbUsername || 'sa', 
    dbPassword || '',
    sequelizeOptions
);

let isConnected = false;
let syncPromise: Promise<void> | null = null;

export async function intializeConnection(): Promise<void> {
    // Skip during build time
    if (isBuildTime || !dbHost) {
        console.log('Skipping database connection (build time or not configured)');
        return;
    }
    
    if (isConnected) return;
    
    try {
        await sequelize.authenticate();
        console.log('Azure SQL connection established successfully.');
        isConnected = true;
    } catch (error) {
        console.error('Unable to connect to Azure SQL database:', error);
        // Don't throw during build - just log
        if (process.env.NODE_ENV !== 'production') {
            throw error;
        }
    }
}

// Lazy sync - only syncs once per process
export async function syncDatabase(): Promise<void> {
    if (isBuildTime || !dbHost) return;
    
    if (!syncPromise) {
        syncPromise = sequelize.sync().then(() => {
            console.log('Database synced successfully.');
        }).catch((error) => {
            console.error('Database sync failed:', error);
            syncPromise = null;
        });
    }
    return syncPromise;
}
