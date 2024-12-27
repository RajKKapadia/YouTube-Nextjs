import { getBlogById } from "@/server/database"

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const blog = await getBlogById({ id: parseInt(params.id) })
    return (
        <div>
            <h1>{blog[0].title}</h1>
            <p>{blog[0].description}</p>
            <p>{blog[0].author}</p>
            <p>{blog[0].createdAt.toISOString()}</p>
        </div>
    );
}
