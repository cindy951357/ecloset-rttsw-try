import { Meta, Story } from '@storybook/react';
import App from './App';

const meta: Meta = {
    title: 'App',
    component: App,
};

export default meta;

export const Template: Story = (args) => <App />;
