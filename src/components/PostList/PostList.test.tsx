import { render, screen } from "@testing-library/react";
import PostList from "./PostList";
import * as store from "../../store/store";
const mockPosts = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

beforeEach(() => {
  jest
    .spyOn(store, "usePostStore")
    .mockImplementation(() => ({ posts: mockPosts }));
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders PostList with multiple Post components", () => {
  render(<PostList />);
  expect(screen.getByText("Post 1 Title")).toBeInTheDocument();
  expect(screen.getByText("Post 2 Title")).toBeInTheDocument();
});
