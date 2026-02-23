import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

import { User } from '../../models/user.model';
import {intializeConnection, syncDatabase} from '../../utils/databaseUtils/databaseUtils';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        // Initialize database connection inside the callback
        await intializeConnection();
        await syncDatabase();
        
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
    signIn: '/login',
    signOut: '/order'
  }
}
