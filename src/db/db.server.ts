import * as schema from './schema';

import { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USERNAME } from '$env/static/private';

import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

const connection = connect({
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD
});

export const db = drizzle(connection, { schema });
