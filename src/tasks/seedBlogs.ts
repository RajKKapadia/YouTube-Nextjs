import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'
import { blogTable } from '@/db/schema'

const db = drizzle(process.env.DATABASE_URL!)
// Seed a blogs
async function main() {
    const blog: typeof blogTable.$inferInsert[] = [
        {
            title: 'Blog one',
            description: 'This is the first blog',
            author: 'John Doe',
            createdAt: new Date(),
        },
        {
            title: 'Blog two',
            description: 'This is the second blog',
            author: 'Raj Kapadia',
            createdAt: new Date(),
        },
        {
            title: 'Blog three',
            description: 'This is the third blog',
            author: 'Rajesh Khanna',
            createdAt: new Date(),
        }
    ]

    for (const b of blog) {
        await db.insert(blogTable).values(blog)
        console.log('New blog created!')
    }
}

main()
