import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';
import { Product } from "@/models/product.model";
import { Size } from "@/models/size.model";


// Define the association
Product.hasMany(Size, { foreignKey: 'productId', as: 'sizes' });
// You can also define the reverse association if needed
Size.belongsTo(Product, { foreignKey: 'productId', as: 'product' });


// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();