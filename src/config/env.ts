import dotenv from "dotenv";
dotenv.config();

const env = () => ({
  APP_PORT: +process.env.APP_PORT,
  FIRESTORE_PROJECT_ID: process.env.FIRESTORE_PROJECT_ID,
  FIRESTORE_SECRET_PATH: process.env.FIRESTORE_SECRET_PATH,
  APP_X_API_KEY: process.env.APP_X_API_KEY
});

export default env();
