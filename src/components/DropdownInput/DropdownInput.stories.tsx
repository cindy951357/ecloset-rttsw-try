import { Meta, Story } from '@storybook/react';
import { DropdownInput, Props } from './DropdownInput';

import { firstLayerClothTypes } from './../../mockData/mockTypes';

const meta: Meta = {
    title: 'DropdownInput',
    component: DropdownInput,
}

export default meta;

const Template: Story<Props> = ({ optionList }) =>
    <DropdownInput
        layer={'FIRST'}
        optionList={optionList}
        setParentSelected={() => { }}
        clearSecondLayerDefaultOption={() => { }}
        secondLayerDefaultOption={''}
    />

export const Default = Template.bind({});

Default.args = {
    optionList: firstLayerClothTypes,
}