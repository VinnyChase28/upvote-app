import React from "react";
import AlertComponent from "../Alert/Alert";
import { useUpvoteStore } from "../../store/store"; // Adjust the import path as necessary

// Moved the definition of posts to inside the component
const posts = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

const UpvotesList: React.FC = () => {
  const { upvotes } = useUpvoteStore();

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
