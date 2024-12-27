import { getBlogById } from "@/server/database";
import EditBlogForm from "@/app/blog/_form/edit-blog-form";

export default async function BlogPostEditPage({ params }: { params: { id: string } }) {
    const blog = await getBlogById({ id: parseInt(params.id) })
    return (
        <EditBlogForm blog={blog[0]} />
    )
}
