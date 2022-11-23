import { Meta, Story } from '@storybook/react';
import { NavBar, Props } from './NavBar';

const meta: Meta = {
    title: 'NavBar',
    component: NavBar,
}

export default meta;

const Template: Story<Props> = (args) => <NavBar {...args} />

export const Default = Template.bind({});