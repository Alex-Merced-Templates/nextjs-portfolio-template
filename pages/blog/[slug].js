import { getPosts } from "../../utils/posts";

export default function BlogPost({ post }) {
  const { frontmatter, content } = post;
  const { title, thumbnail, published } = frontmatter;
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  // get list of posts
  const posts = getPosts();

  // generate a path per post
  const paths = posts.map((post) => ({
    params: { slug: post.frontmatter.slug },
  }));

  // return paths
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get posts
  const posts = getPosts();

  // find matching post based on slug
  const post = posts.find((p) => p.frontmatter.slug === params.slug);

  // return post as props
  return {
    props: { post },
  };
}
