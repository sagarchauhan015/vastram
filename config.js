// config.js
const dotenv = require('dotenv');
dotenv.config();

const env_dev = process.env.PROD_NEXT_ENV;

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT),
   url: process.env.DEV_APP_URL,
   JWT_SECRET_KEY : process.env.DEV_JWT_SECRET_KEY
 },
 db: {
   host: process.env.DEV_DB_HOST,
   name: process.env.DEV_DB_NAME,
   username: process.env.DEV_DB_USERNAME,
   password: process.env.DEV_DB_PASSWORD
 },
 payment: {
   key: process.env.DEV_RAZORPAY_KEY_ID,
   secret: process.env.DEV_RAZORPAY_KEY_SECRET
 },
 imageKit: {
    publicKey: process.env.DEV_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.DEV_IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.DEV_IMAGEKIT_URL_ENDPOINT
  }
};

const prod = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT),
    url: process.env.PROD_APP_URL,
    JWT_SECRET_KEY : process.env.PROD_JWT_SECRET_KEY
  },
  db: {
    host: process.env.PROD_DB_HOST,
    name: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD
  },
  payment: {
    key: process.env.PROD_RAZORPAY_KEY_ID,
    secret: process.env.PROD_RAZORPAY_KEY_SECRET
  },
  imageKit: {
     publicKey: process.env.PROD_IMAGEKIT_PUBLIC_KEY,
     privateKey: process.env.PROD_IMAGEKIT_PRIVATE_KEY,
     urlEndpoint: process.env.PROD_IMAGEKIT_URL_ENDPOINT
   }
 };

const config = {
    dev,
    prod
};
   
export default config[env_dev];