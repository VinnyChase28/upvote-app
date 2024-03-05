import React from "react";
import { Card } from "../ui/card";
import Upvote from "../Upvote/Upvote";

interface PostProps {
  postId: string;
  title: string;
  description: string;
}

const Post: React.FC<PostProps> = ({ postId, title, description }) => {
  return (
    <Card className="max-w-md mx-auto my-4 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="mt-2">
        <Upvote postId={postId} />
      </div>
    </Card>
  );
};

export default Post;
