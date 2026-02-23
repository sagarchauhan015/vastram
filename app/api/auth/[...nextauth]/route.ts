import NextAuth from 'next-auth'
import { authOptions } from '@/libs/auth/authOptions';

// Force dynamic rendering - prevents build-time execution
export const dynamic = 'force-dynamic';

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST }