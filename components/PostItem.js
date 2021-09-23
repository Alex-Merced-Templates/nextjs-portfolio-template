import Link from "next/link";

export default function PostItem({ post }) {
  return (
    <div>
      <Link href={`/blog/${post.frontmatter.slug}`}>
        {post.frontmatter.title}
      </Link>
      <img src={post.frontmatter.thumbnail} />
      <p>{post.frontmatter.published}</p>
      <p>{post.frontmatter.summary}</p>
    </div>
  );
}
