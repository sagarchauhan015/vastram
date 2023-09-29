import { DataTypes } from "sequelize";

import { sequelize } from "@/utils/databaseUtils/databaseUtils";

export const Size = sequelize.define('Size',{
    productId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})