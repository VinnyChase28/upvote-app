import React from "react";
import AlertComponent from "./Alert";
import { useUpvoteStore } from "../store/store"; // Adjust the import path as necessary
import type { Post } from "../types";

interface UpvotesListProps {
  posts: Post[];
}

const UpvotesList: React.FC<UpvotesListProps> = ({ posts }) => {
  const { upvotes } = useUpvoteStore(); // Access the upvote state from the store

  // Filter posts to only include those that have been upvoted
  const upvotedPosts = posts.filter((post) => !upvotes[post.id]);

  return (
    <div className="space-y-4">
      {upvotedPosts.map((post) => (
        <AlertComponent
          key={post.id} // Don't forget to add a key here for each list item
          postId={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default UpvotesList;