// PostList.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "./PostList";


//would normally mock an api call here
test("renders PostList with multiple Post components", () => {
  render(<PostList />);
  expect(screen.getByText("Post 1 Title")).toBeInTheDocument();
  expect(screen.getByText("Post 2 Title")).toBeInTheDocument();
});
