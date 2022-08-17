import { Meta, Story } from '@storybook/react';
import { ClothItem, Props } from './ClothItem';

const meta: Meta = {
    title: 'ClothItem',
    component: ClothItem,
}

export default meta;

const Template: Story<Props> = (args) => <ClothItem {...args} />

export const Default = Template.bind({});
