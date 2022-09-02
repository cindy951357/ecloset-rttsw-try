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

const closetPageClass = classnames(
    'closet-page',
    'page',
    'grid',
    'grid-rows-6',
);

const filterConditionSectionClass = classnames(
    'filter-condition-section',
    'flex',
);

const filterResultClass = classnames(
    'filter-closet-result',
    'w-full',
    'h-full',
    'flex',
    'flex-wrap',
    'row-span-5',
);

const clothItemClass = classnames(
    'cloth-item-result',
    'flex',
    'm-2',

);

const ClosetPage = ({ ...props }: Props) => {
    const [firstTypeSelected, setFirstTypeSelected] = useState(ALL);
    const [secondTypeSelected, setSecondTypeSelected] = useState(ALL);
    const [secondLayerDefaultOption, clearSecondLayerDefaultOption] = useState('');
    return (
        <div className={closetPageClass}>
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
    ClosetPage,
};
export type { Props };