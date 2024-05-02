import {TestComponentProps} from './TestComponent.types';

const TestComponent = ({theme = 'primary'}: TestComponentProps) => {
    return (
        <div
            data-testid="test-component"
            className={`test-component test-component-${theme}`}
        >
            <h1 className="heading">I'm the test component</h1>
            <h2>Made with love by Renzo</h2>
        </div>
    );
};

export default TestComponent;