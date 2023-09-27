import { sequelize } from "@/utils/databaseUtils/databaseUtils";
import { DataTypes } from "sequelize";

export const Filter = sequelize.define('Filter', {
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    size: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})