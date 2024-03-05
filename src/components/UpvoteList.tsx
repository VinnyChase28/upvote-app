import React from "react";
import AlertComponent from "./Alert";
import type { Post } from "../types";

interface UpvotesListProps {
  posts: Post[];
}

const UpvotesList: React.FC<UpvotesListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <AlertComponent
          postId={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default UpvotesList;
