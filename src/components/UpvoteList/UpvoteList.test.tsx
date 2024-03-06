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
  // Setup mock store to indicate that only the first post is upvoted
  mockedUseUpvoteStore.mockImplementation(() => ({
    upvotes: { "1": true },
  }));

  render(<UpvotesList />);

  // Check that the upvoted post is rendered
  expect(screen.getByText("Post 1 Title")).toBeInTheDocument();

  // Check that the not upvoted post is not rendered
  expect(screen.queryByText("Not Upvoted Post")).not.toBeInTheDocument();
  expect(
    screen.queryByText("This post has not been upvoted.")
  ).not.toBeInTheDocument();
});
