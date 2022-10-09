import { render } from "@testing-library/react";

import SkillsPortfolio from "./SkillsPortfolio";
import { SkillsPortfolioProps } from "./SkillsPortfolio.types";

describe("Test Component", () => {
  let props: SkillsPortfolioProps;

  beforeEach(() => {
    // props = {
    //   theme: "primary"
    // };
  });

  // const renderComponent = () => render(<SkillsPortfolio {...props} />);
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
