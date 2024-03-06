import React from "react";
import { render } from "@testing-library/react";
import ArrowList from "./ArrowList";

describe("ArrowList", () => {
  test("renders the correct number of ArrowListContainers", () => {
    const { getAllByRole } = render(<ArrowList />);
    expect(getAllByRole("article").length).toBe(3);
  });
});
