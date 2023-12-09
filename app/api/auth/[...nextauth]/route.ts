import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { User } from '@/models/user.model';
import {intializeConnection} from '@/utils/databaseUtils/databaseUtils';
import { sequelize } from '@/utils/databaseUtils/databaseUtils';



// Build connection with database
intializeConnection();
// To sync the table (If table is not in DB, it will create the table)
sequelize.sync();

export const authOptions : AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        //@ts-ignore
        const {email, password} = credentials;

        console.log(email, password)

        try {

          let whereJson = {
            email : email
          }
          let queryJson = {
            where: whereJson
          }
          const user = await User.findOne(queryJson);

          if(!user){
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.dataValues.password);

          if(!passwordMatch){
            return null;
          }

          return user.dataValues;

        } catch (error) {
          console.log(error)
        }

        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  }
}

const authHandler = NextAuth(authOptions);

export {authHandler as POST, authHandler as GET}