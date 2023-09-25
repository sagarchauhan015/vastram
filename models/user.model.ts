// Import DataTypes because of typescript types otherwise use Sequelize, if types not required
import { DataTypes } from "sequelize";


// Import sequelize object from databaseUtils
import { sequelize } from "@/utils/databaseUtils/databaseUtils";




export const User = sequelize.define('User', {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    loginFrom: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    googleId: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    subscriptionType: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})

// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();