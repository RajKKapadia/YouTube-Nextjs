"use server"

import { createBlog, deleteBlogById, getAllBlogs, getBlogById, updateBlogById } from "@/server/database"

export const deleteBlogAction = async (params: { id: number }) => {
    await deleteBlogById({ id: params.id })
}

export const createBlogAction = async (params: { title: string, description: string, author: string, createdAt: Date }) => {
    const blogId = await createBlog({ title: params.title, description: params.description, author: params.author, createdAt: params.createdAt })
    return blogId
}

export const updateBlogAction = async (params: { id: number, title: string, description: string, author: string }) => {
    await updateBlogById({ id: params.id, title: params.title, description: params.description, author: params.author })
}

export const getBlogByIdAction = async (params: { id: number }) => {
    const blog = await getBlogById({ id: params.id })
    return blog;
}

export const getAllBlogsAction = async () => {
    const blogs = await getAllBlogs();
    return blogs;
}
