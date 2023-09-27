import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';


// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();