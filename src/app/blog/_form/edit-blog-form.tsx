"use client"

import { updateBlogById } from "@/server/database";
import { useRouter } from "next/navigation";

export default async function EditBlogForm({ blog }: {
    blog: {
        title: string;
        description: string;
        author: string;
        id: number;
        createdAt: Date;
    }
}) {
    const router = useRouter()
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const title = (e.target as any).title.value;
        const description = (e.target as any).description.value;
        const author = (e.target as any).author.value;
        console.log(title, description, author);
        await updateBlogById({ id: blog.id, title, description, author })
        router.push(`/blog/${blog.id}`)
    }
    return (
        <div>
            <h1>Edit Blog</h1>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input type="text" name="title" defaultValue={blog.title} />
                <label>Description</label>
                <textarea name="description" defaultValue={blog.description}></textarea>
                <label>Author</label>
                <input type="text" name="author" defaultValue={blog.author} />
                <button>Save</button>
            </form>
        </div>
    );
}