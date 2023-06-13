import { tasks as data } from '../db/schema';
import { db } from '../db/db.server';

export const load = async () => {
	const tasks = await db.select().from(data);
	return { tasks: tasks };
};
