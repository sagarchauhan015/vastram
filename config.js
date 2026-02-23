// config.js
// DEPRECATED: This file is no longer used. Environment variables are accessed directly.
// Kept for reference only. Configure environment variables in Vercel Dashboard.

/**
 * Required Environment Variables for Vercel:
 * 
 * Database (Azure SQL Server):
 * - DB_HOST: your-server.database.windows.net
 * - DB_NAME: your-database-name
 * - DB_USERNAME: your-username
 * - DB_PASSWORD: your-password  
 * - DB_PORT: 1433
 * 
 * Authentication:
 * - NEXTAUTH_SECRET: your-nextauth-secret
 * - NEXTAUTH_URL: https://your-domain.vercel.app
 * 
 * Stripe:
 * - STRIPE_SECRET_KEY: sk_live_xxx or sk_test_xxx
 * - STRIPE_WEBHOOK_SECRET: whsec_xxx
 * 
 * ImageKit:
 * - IMAGEKIT_PUBLIC_KEY: public_xxx
 * - IMAGEKIT_PRIVATE_KEY: private_xxx
 * - IMAGEKIT_URL_ENDPOINT: https://ik.imagekit.io/your_id
 * 
 * App:
 * - NEXT_PUBLIC_APP_URL: https://your-domain.vercel.app
 */

const config = {
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || '',
    jwtSecret: process.env.NEXTAUTH_SECRET || ''
  },
  db: {
    host: process.env.DB_HOST || '',
    name: process.env.DB_NAME || '',
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || '1433'
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY || '',
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || ''
  },
  imageKit: {
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || ''
  }
};

export default config;