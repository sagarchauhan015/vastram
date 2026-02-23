import { Sequelize, Options } from "sequelize";

// Get database config at runtime (not module load time)
function getDbConfig() {
    return {
        host: process.env.DB_HOST || '',
        name: process.env.DB_NAME || '',
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        port: parseInt(process.env.DB_PORT || '1433')
    };
}

let sequelizeInstance: Sequelize | null = null;
let isConnected = false;
let syncPromise: Promise<void> | null = null;

function createSequelizeInstance(): Sequelize {
    const config = getDbConfig();
    
    // For build time, create a dummy instance that won't actually connect
    const host = config.host || 'localhost';
    const name = config.name || 'tempdb';
    const username = config.username || 'sa';
    const password = config.password || '';
    
    const sequelizeOptions: Options = {
        host: host,
        port: config.port,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: true,
                trustServerCertificate: false,
                enableArithAbort: true,
                connectTimeout: 30000
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
    
    return new Sequelize(name, username, password, sequelizeOptions);
}

// Create instance immediately for model definitions (but don't connect yet)
export const sequelize = createSequelizeInstance();

export async function intializeConnection(): Promise<void> {
    const config = getDbConfig();
    
    if (!config.host) {
        throw new Error('DB_HOST environment variable is not set. Available env vars: ' + Object.keys(process.env).filter(k => k.startsWith('DB_')).join(', '));
    }
    
    if (isConnected) return;
    
    // Recreate instance with runtime config if needed
    if (!sequelizeInstance) {
        sequelizeInstance = createSequelizeInstance();
    }
    
    try {
        await sequelize.authenticate();
        console.log('Azure SQL connection established successfully.');
        isConnected = true;
    } catch (error) {
        console.error('Unable to connect to Azure SQL database:', error);
        throw error;
    }
}

// Lazy sync - only syncs once per process
export async function syncDatabase(): Promise<void> {
    if (!syncPromise) {
        syncPromise = sequelize.sync().then(() => {
            console.log('Database synced successfully.');
        }).catch((error) => {
            console.error('Database sync failed:', error);
            syncPromise = null;
            throw error;
        });
    }
    return syncPromise;
}
