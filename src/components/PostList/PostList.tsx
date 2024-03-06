import Post from "../Post/Post";

interface Post {
  id: string;
  title: string;
  description: string;
}

//would fetch from the api here, so that the component can be reused
const posts: Post[] = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

const PostList = () => {
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
