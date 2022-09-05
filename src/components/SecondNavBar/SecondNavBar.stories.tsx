import { Meta, Story } from '@storybook/react';
import { SecondNavBar, Props } from './SecondNavBar';

const meta: Meta = {
    title: 'SecondNavBar',
    component: SecondNavBar,
}

export default meta;

const Template: Story<Props> = (args) => <SecondNavBar {...args} />

export const Default = Template.bind({});