"use client"

import { deleteBlogAction } from "@/server/action";
import { useRouter } from 'next/navigation'

export default function DeleteBlogPostPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    return (
        <div>
            <h1>Delete Blog</h1>
            <p>Are you sure you want to delete this blog?</p>
            <div>
                <button onClick={() => router.push(`/blog/${params.id}`)}>Cancel</button>
                <button onClick={async () => {
                    await deleteBlogAction({ id: parseInt(params.id) })
                    router.push(`/blog`)
                }}>Delete</button>
            </div>
        </div>
    );
}