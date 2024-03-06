import Post from "../Post/Post";

interface RedditPost {
  id: string;
  title: string;
  description: string;
}

const posts: RedditPost[] = [
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
