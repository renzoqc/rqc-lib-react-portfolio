module.exports=(componentName)=>({
    content:
`import { ${componentName}Props } from "./${componentName}.types";
import './${componentName}.scss';

const ${componentName} = (props: ${componentName}Props)=>{
    return (
        <div data-testid="${componentName}">
            I'm ${componentName}
        </div>
    )
};

export default ${componentName};

`
    ,
    extension: '.tsx'});
