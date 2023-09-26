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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})

// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();