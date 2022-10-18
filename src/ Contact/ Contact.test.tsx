import { render } from "@testing-library/react";

import Contact from "./Contact";
import { ContactProps } from "./Contact.types";

describe("Test Component", () => {
  let props: ContactProps;

  beforeEach(() => {
    // props = {
    //   theme: "primary"
    // };
  });

  // const renderComponent = () => render(<Contact {...props} />);
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
