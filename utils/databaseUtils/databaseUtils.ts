import { Sequelize } from "sequelize";
import env_values from '../../config'

console.log(env_values.db.name);

export const sequelize = new Sequelize(
    env_values.db.name, // Database Name
    env_values.db.username,       // Database Username
    env_values.db.password,  // Database Passowrd
    {
        dialect: 'mysql',
        host: env_values.db.host
    }
);

async function intializeConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

intializeConnection();