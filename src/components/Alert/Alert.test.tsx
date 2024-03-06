import { render, screen } from "@testing-library/react";
import AlertComponent from "./Alert";

test("renders AlertComponent with title and description", () => {
  render(
    <AlertComponent
      postId="1"
      title="Test Title"
      description="Test Description"
    />
  );
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});
