import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Upvote from "../Upvote/Upvote";
import { useUpvoteStore } from "../../store/store";

jest.mock("../../store/store", () => ({
  useUpvoteStore: jest.fn(),
}));

const mockedUseUpvoteStore = useUpvoteStore as jest.MockedFunction<
  typeof useUpvoteStore
>;

test("toggles Upvote on click", async () => {
  const mockToggleSelected = jest.fn();

  mockedUseUpvoteStore.mockImplementation(() => ({
    upvotes: { "1": false },
    toggleSelected: mockToggleSelected,
  }));

  render(<Upvote postId="1" />);
  const upvoteButton = screen.getByRole("button");
  expect(upvoteButton).toHaveAttribute("aria-pressed", "false");

  // Simulate user clicking the upvote button
  await userEvent.click(upvoteButton);

  // Check if `toggleSelected` was called
  expect(mockedUseUpvoteStore.mock.calls.length).toBeGreaterThan(0);
  expect(mockedUseUpvoteStore().toggleSelected).toHaveBeenCalledWith("1");
});
