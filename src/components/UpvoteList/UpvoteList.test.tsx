import React from "react";
import { render, screen } from "@testing-library/react";
import UpvotesList from "./UpvoteList";
import { useUpvoteStore } from "../../store/store";
import { AlertComponentProps } from "../Alert/Alert";

jest.mock("../../store/store", () => ({
  useUpvoteStore: jest.fn(),
}));

jest.mock(
  "../Alert/Alert",
  () =>
    ({ title, description, ...props }: AlertComponentProps) =>
      (
        <div data-testid="mock-alert" {...props}>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      )
);

// Assuming useUpvoteStore has been mocked above
const mockedUseUpvoteStore = useUpvoteStore as jest.MockedFunction<
  typeof useUpvoteStore
>;

test("renders only upvoted posts", () => {
  const posts = [
    {
      id: "1",
      title: "Upvoted Post",
      description: "This post has been upvoted.",
    },
    {
      id: "2",
      title: "Not Upvoted Post",
      description: "This post has not been upvoted.",
    },
  ];

  // Setup mock store to indicate that only the first post is upvoted
  mockedUseUpvoteStore.mockImplementation(() => ({
    upvotes: { "1": true },
  }));

  render(<UpvotesList posts={posts} />);

  // Check that the upvoted post is rendered
  expect(screen.getByText("Upvoted Post")).toBeInTheDocument();
  expect(screen.getByText("This post has been upvoted.")).toBeInTheDocument();

  // Check that the not upvoted post is not rendered
  expect(screen.queryByText("Not Upvoted Post")).not.toBeInTheDocument();
  expect(
    screen.queryByText("This post has not been upvoted.")
  ).not.toBeInTheDocument();
});
