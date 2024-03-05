// components/PostList.tsx
import React from "react";
import Post from "../Post/Post";

interface PostData {
  id: string;
  title: string;
  description: string;
}

interface PostListProps {
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
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
