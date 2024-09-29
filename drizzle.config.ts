import type { Config } from 'drizzle-kit';

/** @type {import('drizzle-kit').Config} */
export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.ACCOUNT_ID ?? '',
    databaseId: process.env.DATABASE_ID ?? '',
    token: process.env.DATABASE_TOKEN ?? '',
  },
} satisfies Config;
