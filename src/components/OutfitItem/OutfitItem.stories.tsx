import { Meta, Story } from '@storybook/react';
import { OutfitItem, Props } from './OutfitItem';

import { defaultOutfitClothIDs, defaultOutfitFiles, defaultOutfitImgFileNames } from './../../../constants';

const meta: Meta = {
    title: 'OutfitItem',
    component: OutfitItem,
}

export default meta;

const Template: Story<Props> = (args) => <OutfitItem {...args} />

export const Default = Template.bind({});

Default.args = {
    // clothFiles: defaultOutfitFiles,
    clothIDs: defaultOutfitClothIDs,
}