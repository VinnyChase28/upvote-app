import { render, screen } from "@testing-library/react";
import UpvotesList from "./UpvoteList";
import { useUpvoteStore } from "../../store/store";
import { usePostStore } from "../../store/store";

jest.mock("../../store/store", () => ({
  useUpvoteStore: jest.fn(),
  usePostStore: jest.fn(), // Mock usePostStore as well
}));

// Mocked data for posts
const mockedPosts = [
  { id: "1", title: "Post 1 Title", description: "Post 1 Description" },
  { id: "2", title: "Post 2 Title", description: "Post 2 Description" },
];

// Assuming useUpvoteStore and usePostStore have been mocked above
const mockedUseUpvoteStore = useUpvoteStore as jest.MockedFunction<
  typeof useUpvoteStore
>;
const mockedUsePostStore = usePostStore as jest.MockedFunction<
  typeof usePostStore
>;

test("renders only upvoted posts", () => {
  mockedUseUpvoteStore.mockImplementation(() => ({
    upvotes: { "1": true },
  }));

  mockedUsePostStore.mockImplementation(() => ({
    posts: mockedPosts,
  }));

  render(<UpvotesList />);

  expect(screen.getByText("Post 1 Title")).toBeInTheDocument();
  expect(screen.queryByText("Post 2 Title")).not.toBeInTheDocument();
});
