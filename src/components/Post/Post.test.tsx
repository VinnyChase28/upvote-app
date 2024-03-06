// Post.test.tsx
import { render, screen } from "@testing-library/react";
import Post from "./Post";

test("renders Post with title, description, and Upvote button", () => {
  render(<Post postId="1" title="Post Title" description="Post Description" />);
  expect(screen.getByText("Post Title")).toBeInTheDocument();
  expect(screen.getByText("Post Description")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument(); // Assuming the Upvote component renders a button
});
