module.exports=(componentName)=>({
  content:
`import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<${componentName} {...props} />);
  it("should render text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("${componentName}");
    expect(component).toHaveTextContent("I'm ${componentName}");
  });
});
`
  ,
  extension: '.test.tsx'});
