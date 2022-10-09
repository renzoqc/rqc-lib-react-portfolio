import { fireEvent, render } from '@testing-library/react';
import { Row, Col } from './Grid';

describe('Test Grid Component', () => {
  it('should render row grid', () => {
    const renderComponent = () => render(<Row testId="grid">Hello</Row>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-row');
    expect(component).toHaveTextContent('Hello');
  });
  it('should render row grid with flex and noGutter', () => {
    const renderComponent = () => render(<Row flex noGutter testId="grid">Hello</Row>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-row', 'RQ-row-flex', 'RQ-no-gutter');
    expect(component).toHaveTextContent('Hello');
  });
  it('should render col grid', () => {
    const renderComponent = () => render(<Col testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col');
    expect(component).toHaveTextContent('Hello');
  });
  it('should render col grid but hidden', () => {
    const renderComponent = () => render(<Col size={0} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-hidden-xs', 'RQ-hidden-sm', 'RQ-hidden-md', 'RQ-hidden-lg', 'RQ-hidden-xl');
  });

  it('testing individual sizes', () => {
    const renderComponent = () => render(<Col xs={1} sm={2} md={3} lg={4} xl={5} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-1', 'RQ-col-sm-2', 'RQ-col-md-3', 'RQ-col-lg-4', 'RQ-col-xl-5');
  });

  it('testing over and under pairs (xsm)', () => {
    const renderComponent = () => render(<Col usm={1} osm={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-1', 'RQ-col-sm-2', 'RQ-col-md-2', 'RQ-col-lg-2', 'RQ-col-xl-2');
  });

  it('testing over and under pairs (xmd)', () => {
    const renderComponent = () => render(<Col umd={1} omd={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-1', 'RQ-col-sm-1', 'RQ-col-md-2', 'RQ-col-lg-2', 'RQ-col-xl-2');
  });

  it('testing over and under pairs (xlg)', () => {
    const renderComponent = () => render(<Col ulg={1} olg={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-1', 'RQ-col-sm-1', 'RQ-col-md-1', 'RQ-col-lg-2', 'RQ-col-xl-2');
  });

  it('testing over and under pairs (xxl)', () => {
    const renderComponent = () => render(<Col uxl={1} oxl={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-1', 'RQ-col-sm-1', 'RQ-col-md-1', 'RQ-col-lg-1', 'RQ-col-xl-2');
  });

  it('testing other 1', () => {
    const renderComponent = () => render(<Col md={1} other={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-2', 'RQ-col-sm-2', 'RQ-col-md-1', 'RQ-col-lg-2', 'RQ-col-xl-2');
  });

  it('testing other 2', () => {
    const renderComponent = () => render(<Col sm={1} other={2} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-col-xs-2', 'RQ-col-sm-1', 'RQ-col-md-2', 'RQ-col-lg-2', 'RQ-col-xl-2');
  });

  it('testing center and className params', () => {
    const renderComponent = () => render(<Col center className="beautiful" testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    expect(component).toHaveClass('RQ-col', 'RQ-align-self-center', 'beautiful');
  });
  it('testing onclick param', () => {
    let testingVal = 0;
    const renderComponent = () => render(<Col center onClick={() => { testingVal = 1; }} testId="grid">Hello</Col>);
    const { getByTestId } = renderComponent();
    const component = getByTestId('grid');
    fireEvent(component, new MouseEvent('click', { bubbles: true, cancelable: true }));
    expect(testingVal).toEqual(1);
  });
});
