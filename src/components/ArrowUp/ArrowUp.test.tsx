import { render, fireEvent } from "@testing-library/react";
import ArrowUp from "./ArrowUp";

describe("ArrowUp", () => {
  test("displays the correct style when selected", () => {
    const { getByTestId } = render(
      <ArrowUp isSelected={true} toggleSelected={() => {}} />
    );
    const arrowDiv = getByTestId("arrow-up");

    expect(arrowDiv).toHaveStyle(`background: #E5E8FD`);
    expect(arrowDiv).toHaveStyle(`color: #253CF2`);
  });

  test("displays the correct style when not selected", () => {
    const { getByTestId } = render(
      <ArrowUp isSelected={false} toggleSelected={() => {}} />
    );
    const arrowDiv = getByTestId("arrow-up");

    expect(arrowDiv).toHaveStyle(`background: #F4F6F8`);
    expect(arrowDiv).toHaveStyle(`color: #343A40`);
  });
});
