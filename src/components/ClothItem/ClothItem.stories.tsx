import { Meta, Story } from '@storybook/react';
import { ClothItem, Props } from './ClothItem';

import { mockCloset } from './../../mockData/mockCloset';

const meta: Meta = {
    title: 'ClothItem',
    component: ClothItem,
}

export default meta;

const Template: Story<Props> = (args) => <ClothItem {...args} />

export const Default = Template.bind({});
Default.args = {
    imgFile: mockCloset.filter(elem => { return elem.id === 1 })[0].file,
}
