import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

import type { InferModel } from 'drizzle-orm';

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 40 }).notNull()
});

export type Task = InferModel<typeof tasks>;
