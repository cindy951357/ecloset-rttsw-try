import { useState } from 'react';
import { DropdownInput } from './../../components/DropdownInput/DropdownInput';
import { ClothItem } from '../../components/ClothItem/ClothItem';

import {
    clothTypes, firstLayerClothTypes,
    TOP
} from './../../mockData/mockTypes';
import { mockCloset } from './../../mockData/mockCloset';
interface Props extends HTMLAttributes<HTMLDivElement> {
}
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

const filterConditionSectionClass = classnames(
    'filter-condition-section',
    'flex',
)

const filterResultClass = classnames(
    'filter-closet-result',
    'w-48',
    'h-48',
)

const ClosetPage = ({ ...props }: Props) => {
    const [firstTypeSelected, setFirstTypeSelected] = useState(TOP);
    const [secondTypeSelected, setSecondTypeSelected] = useState('');
    const [secondLayerDefaultOption, clearSecondLayerDefaultOption] = useState('');
    return (
        <div className='closet-page page'>
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
                        || (item.firstType === firstTypeSelected && secondLayerDefaultOption === '')
                    ) {
                        return (
                            <ClothItem
                                key={item.id}
                                imgFile={item.file}
                                viewMode={'SIMPLE_MODE'}
                                borderRadius={'1em 1em 1em 1em'}
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