import { render } from "@testing-library/react";

import Logo from "./Logo";
import { LogoProps } from "./Logo.types";

describe("Test Component", () => {
  let props: LogoProps;

  beforeEach(() => {
    // props = {
    //   theme: "primary"
    // };
  });

  // const renderComponent = () => render(<Logo {...props} />);
  //
  // it("should have primary className with default props", () => {
  //   const { getByTestId } = renderComponent();
  //
  //   const testComponent = getByTestId("test-component");
  //
  //   expect(testComponent).toHaveClass("test-component-primary");
  // });
  //
  // it("should have secondary className with theme set as secondary", () => {
  //   props.theme = "secondary";
  //   const { getByTestId } = renderComponent();
  //
  //   const testComponent = getByTestId("test-component");
  //
  //   expect(testComponent).toHaveClass("test-component-secondary");
  // });
});
