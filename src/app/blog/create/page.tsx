"use client"

import { createBlogAction } from "@/server/action"
import { useRouter } from "next/navigation"

export default function CreateBlogPage() {
    const router = useRouter()
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const title = (e.target as any).title.value
        const description = (e.target as any).description.value
        const author = (e.target as any).author.value
        const blogId = await createBlogAction({ title, description, author, createdAt: new Date() })
        router.push(`/blog/${blogId}`)
    }
    return (
        <div>
            <h1>Edit Blog</h1>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input type="text" name="title" />
                <label>Description</label>
                <textarea name="description" ></textarea>
                <label>Author</label>
                <input type="text" name="author" />
                <button>Save</button>
            </form>
        </div>
    )
}
