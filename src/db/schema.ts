import { date, text, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const blogTable = mysqlTable('blog_table', {
    id: serial().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    author: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    createdAt: date().notNull(),
});
