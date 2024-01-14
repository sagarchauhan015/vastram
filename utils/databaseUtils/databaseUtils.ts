import { Sequelize } from "sequelize";
import pg from 'pg';

// import mysql2 from 'mysql2';
// import config from "@/config";

// export const sequelize = new Sequelize(
//     config.db.name,        // Database Name
//     config.db.username,    // Database Username
//     config.db.password,    // Database Passowrd
//     {
//         dialect: 'mysql',
//         dialectModule: mysql2,
//         host: config.db.host,
//         port: config.app.port,
//         dialectOptions: {
//             ssl: {
//                 rejectUnauthorized: true,
//             },
//         },
//         define: {
//             timestamps: false,
//         },
//     }
// );

const connectionString = process.env.PROD_DATABASE_URL || '';
export const sequelize = new Sequelize(connectionString,{
    dialectModule: pg
});

export async function intializeConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
