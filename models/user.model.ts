// Import DataTypes because of typescript types otherwise use Sequelize, if types not required
import { DataTypes } from "sequelize";


// Import sequelize object from databaseUtils
import { sequelize } from "@/utils/databaseUtils/databaseUtils";
import { Order } from "./order.model";


export const User = sequelize.define('User', {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    confirmPassword: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    lastLogin: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    
})


// Define the association
User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });
// You can also define the reverse association if needed
Order.belongsTo(User, { foreignKey: 'userId', as: 'users' });