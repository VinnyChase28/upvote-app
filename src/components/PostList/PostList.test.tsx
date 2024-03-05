// PostList.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "./PostList";

const posts = [
  {
    id: "1",
    title: "First Post",
    description: "Description of the first post",
  },
  {
    id: "2",
    title: "Second Post",
    description: "Description of the second post",
  },
];

test("renders PostList with multiple Post components", () => {
  render(<PostList posts={posts} />);
  expect(screen.getByText("First Post")).toBeInTheDocument();
  expect(screen.getByText("Second Post")).toBeInTheDocument();
});
