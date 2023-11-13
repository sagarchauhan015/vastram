import { DataTypes } from "sequelize";
import { Size } from "./size.model";
import { sequelize } from "@/utils/databaseUtils/databaseUtils";


export const Product = sequelize.define('Product', {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    productInfo: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    subCategory: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    
})

// Define the association
Product.hasMany(Size, { foreignKey: 'productId', as: 'sizes' });
// You can also define the reverse association if needed
Size.belongsTo(Product, { foreignKey: 'productId', as: 'product' });