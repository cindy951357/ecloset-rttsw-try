import { useState } from 'react';
import { DropdownInput } from './../../components/DropdownInput/DropdownInput';
import { ClothItem } from '../../components/ClothItem/ClothItem';

import {
    ALL,
    clothTypes, firstLayerClothTypes,
    TOP
} from './../../mockData/mockTypes';
import { mockCloset } from './../../mockData/mockCloset';
interface Props extends HTMLAttributes<HTMLDivElement> {
}

import { HTMLAttributes } from 'react';
import classnames from 'classnames';

const viewClosetPageClass = classnames(
    'view-closet-page',
    'grid',
    'grid-rows-12',
    'h-full',
);

const filterConditionSectionClass = classnames(
    'filter-condition-section',
    'row-span-1',
    'grid',
    'grid-cols-2',
    'overflow-y-scroll',
);

const filterResultClass = classnames(
    'filter-closet-result',
    'w-full',
    'h-full',
    'overflow-y-scroll',
    'flex',
    'flex-wrap',
);

const clothItemClass = classnames(
    'cloth-item-result',
    'flex',
    'm-2',

);

const ViewClosetPage = ({ ...props }: Props) => {
    const [firstTypeSelected, setFirstTypeSelected] = useState(ALL);
    const [secondTypeSelected, setSecondTypeSelected] = useState(ALL);
    const [secondLayerDefaultOption, clearSecondLayerDefaultOption] = useState(ALL);
    return (
        <div className={viewClosetPageClass}>
            <div className={filterConditionSectionClass}>
                <DropdownInput
                    layer={'FIRST'}
                    optionList={firstLayerClothTypes}
                    setParentSelected={setFirstTypeSelected}
                    clearSecondLayerDefaultOption={clearSecondLayerDefaultOption}
                    secondLayerDefaultOption={secondLayerDefaultOption} />

                <DropdownInput
                    layer={'SECOND'}
                    optionList={clothTypes[firstTypeSelected]}
                    setParentSelected={setSecondTypeSelected}
                    clearSecondLayerDefaultOption={clearSecondLayerDefaultOption}
                    secondLayerDefaultOption={secondLayerDefaultOption} />
            </div>
            <div className={filterResultClass}>
                {mockCloset.map(item => {
                    if ((item.firstType === firstTypeSelected && item.secondType === secondTypeSelected)
                        || (item.firstType === firstTypeSelected && secondLayerDefaultOption === ALL
                            || firstTypeSelected === ALL)
                    ) {
                        return (
                            <ClothItem
                                key={item.id}
                                className={clothItemClass}
                                imgFile={item.file}
                                viewMode={'SIMPLE_MODE'}
                                borderRadius={'1em 1em 1em 1em'}
                                size={'S'}
                            />
                        );
                    };

                })}
            </div>

        </div>
    );
};
export {
    ViewClosetPage,
};
export type { Props };