import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

const queryClient = postgres(DATABASE_URL);
export const db: PostgresJsDatabase = drizzle(queryClient);
