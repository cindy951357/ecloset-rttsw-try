import { Meta, Story } from "@storybook/react";


import { CalendarGrid } from './CalendarGrid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/CalendarGrid',
    component: CalendarGrid,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CalendarGrid {...args} />;

export const Primary: Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'CalendarGrid',
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
    label: 'CalendarGrid',
};

export const Large: Story = Template.bind({});
Large.args = {
    size: 'large',
    label: 'CalendarGrid',
};

export const Small: Story = Template.bind({});
Small.args = {
    size: 'small',
    label: 'CalendarGrid',
};

