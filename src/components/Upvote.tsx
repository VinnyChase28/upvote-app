import React from "react";
import { Toggle } from "./ui/toggle";
import { useUpvoteStore } from "../store/store";
import { ArrowUp } from "lucide-react";

interface UpvoteProps {
  postId: string;
}

const Upvote: React.FC<UpvoteProps> = ({ postId }) => {
  const { upvotes, toggleSelected } = useUpvoteStore();
  const isSelected = upvotes[postId] || false;

  return (
    <Toggle
      data-state={isSelected ? "on" : "off"}
      onClick={() => toggleSelected(postId)}
      aria-pressed={isSelected}
      variant={isSelected ? "outline" : "default"}
    >
      <ArrowUp color={isSelected ? "black" : "orange"} />
    </Toggle>
  );
};

export default Upvote;
