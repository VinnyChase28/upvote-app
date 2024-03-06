import Post from "../Post/Post";
import { usePostStore } from "../../store/store";

interface Post {
  id: string;
  title: string;
  description: string;
}

const PostList = () => {
  const { posts } = usePostStore();

  return (
    <div className="container mx-auto my-8">
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostList;
