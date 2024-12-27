import { getAllBlogsAction } from "@/server/action";
import Link from "next/link";

export default async function BlogPage() {
    const blogs = await getAllBlogsAction();
    if (!blogs) {
        return <div>No blogs.</div>;
    }
    return (
        <div>
            <Link href="/blog/create">Create Blog</Link>
            <h1>Blog Page</h1>
            <ul>
                {blogs.map(blog => (
                    <div key={blog.id}>
                        <li>{blog.title}</li>
                        <li>{blog.description}</li>
                        <li>{blog.author}</li>
                        <li><Link href={`/blog/${blog.id}`}>View</Link></li>
                        <li><Link href={`/blog/edit/${blog.id}`}>Edit</Link></li>
                        <li><Link href={`/blog/delete/${blog.id}`}>Delete</Link></li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
