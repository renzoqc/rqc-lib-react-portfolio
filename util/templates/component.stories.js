module.exports=(componentName)=>({
    content:
`import { Meta, Story, ArgsTable } from '@storybook/addon-docs';
import ${componentName} from "./${componentName}";

<Meta title="${componentName}" component={${componentName}} />

# ${componentName}

## Props
<ArgsTable of={${componentName}} />

## Description

\`${componentName}\` does something awesome

## Demo

export const Template = (args) => <${componentName} {...args} />

<Story name="example" args={{foo: 'bar'}}>
    {Template.bind({})}
</Story>
`
    ,
    extension: '.stories.mdx'});
