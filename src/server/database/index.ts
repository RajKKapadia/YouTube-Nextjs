"use server"

import { db } from "@/db"
import { blogTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export const deleteBlogById = async (params: { id: number }) => {
    await db.delete(blogTable).where(eq(blogTable.id, params.id))
}

export const getBlogById = async (params: { id: number }) => {
    const blog = await db.select().from(blogTable).where(eq(blogTable.id, params.id))
    return blog
}

export const updateBlogById = async (params: { id: number, title: string, description: string, author: string }) => {
    await db.update(blogTable).set({
        title: params.title,
        description: params.description,
        author: params.author
    }).where(eq(blogTable.id, params.id))
}
// modify the function to return the id of the created blog
export const createBlog = async (blog: { title: string, description: string, author: string, createdAt: Date }) => {
    const result = await db.insert(blogTable).values(blog).$returningId().execute()
    const id = result[0].id
    return id
}

export const getAllBlogs = async () => {
    const blogs = await db.select().from(blogTable)
    return blogs
}
