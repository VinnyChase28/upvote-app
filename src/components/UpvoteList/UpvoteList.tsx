import React from "react";
import AlertComponent from "../Alert/Alert";
import { useUpvoteStore, usePostStore } from "../../store/store";

const UpvotesList: React.FC = () => {
  const { upvotes } = useUpvoteStore();
  const { posts } = usePostStore();
  const upvotedPosts = posts.filter((post) => upvotes[post.id]);

  return (
    <div className="space-y-4">
      {upvotedPosts.map((post) => (
        <AlertComponent
          key={post.id}
          postId={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default UpvotesList;
