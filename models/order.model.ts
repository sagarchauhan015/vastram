import { DataTypes } from "sequelize";

import { sequelize } from "@/utils/databaseUtils/databaseUtils";

export const Order = sequelize.define('Order',{
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    paymentId: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    paymentStatus: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    orderStatus: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    shippingAddress: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})