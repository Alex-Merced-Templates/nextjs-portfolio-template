import PostItem from "../../components/PostItem";
import { getPosts } from "../../utils/posts";

export default function BlogList({posts}) {
    return <div>
        <h1> My Blog </h1>
        {posts.map(post => <PostItem post={post}/>)}
    </div>
}

export async function getStaticProps() {
  // get posts
  const posts = getPosts();

  // return props
  return {
    props: { posts },
  };
}
