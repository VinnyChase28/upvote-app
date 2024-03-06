import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "./PostList";
import * as store from "../../store/store"; // Import the module where usePostStore is located

// Mock posts data
const mockPosts = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

// Mock the usePostStore hook before each test
beforeEach(() => {
  jest
    .spyOn(store, "usePostStore")
    .mockImplementation(() => ({ posts: mockPosts }));
});

afterEach(() => {
  jest.clearAllMocks(); // Clear the mock to ensure it's fresh for other tests
});

// Test to render PostList with mocked posts
test("renders PostList with multiple Post components", () => {
  render(<PostList />);
  expect(screen.getByText("Post 1 Title")).toBeInTheDocument();
  expect(screen.getByText("Post 2 Title")).toBeInTheDocument();
});
