import { mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

import type { InferModel } from 'drizzle-orm';

// enum example
// export const taskRole = mysqlEnum("ENUM", ["A", "B", "C"]);

export const tasks = mysqlTable('tasks', {
	id: varchar('id', { length: 191 }).primaryKey().notNull(),
	createdAt: timestamp('createdAt').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').notNull().defaultNow().onUpdateNow(),
	name: varchar('name', { length: 191 }),
	status: text('status', { enum: ['active', 'archived'] }).notNull()
});

export type Task = InferModel<typeof tasks>;
