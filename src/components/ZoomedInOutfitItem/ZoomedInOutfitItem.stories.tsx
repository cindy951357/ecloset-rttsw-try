import { Meta, Story } from '@storybook/react';
import { ZoomedInOutfitItem, Props } from './ZoomedInOutfitItem';

import { defaultOutfitFiles, SIMPLE_MODE, COMPLEX_MODE } from './../../../constants';

const meta: Meta = {
    title: 'ZoomedInOutfitItem',
    component: ZoomedInOutfitItem,
}

export default meta;

const Template: Story<Props> = (args) => <ZoomedInOutfitItem {...args} />

export const Default = Template.bind({});

Default.args = {
    viewMode: 'SIMPLE_MODE',
    selectedDlothFiles: defaultOutfitFiles,
    show: false,
}