import { Meta, Story } from '@storybook/react';
import { PopupPage } from './PopupPage';

const meta: Meta = {
    title: 'Page/PopupPage',
    component: PopupPage,
}

export default meta;

const Template: Story = (args) => <PopupPage {...args} />

export const Default = Template.bind({});

Default.args = {

}