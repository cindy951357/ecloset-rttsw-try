import React, { useState } from 'react'
import classnames from 'classnames';
import { useSelector } from 'react-redux';

import { DropdownInput } from './../../components/DropdownInput/DropdownInput';
import { ClothItem } from '../../components/ClothItem/ClothItem';

import {
    ALL,
    clothTypes,
    firstLayerClothTypes,
} from './../../mockData/mockTypes';
import { mockCloset } from './../../mockData/mockCloset';
import { clothSelector } from '../../reducers/cloth';

interface Props {
    selectMode: boolean,
    isTall: boolean,
}

export const filterConditionSectionClass = classnames(
    'filter-condition-section',
    'fixed',
    'xs:static',
    'w-full',
    'my-2',
    'flex',
    'flex-col',
    'drop-shadow-md',
    'bg-gradient-to-b',
    'from-white',
    'to-zinc-100',
);

const clothItemClass = classnames(
    'cloth-item-result',
    'flex',
    'm-2',
);
const FilterCloset = ({ ...props }: Props) => {
    const {
        selectMode,
        isTall,
    } = props;


    const filterResultClass = classnames(
        'filter-closet-result',
        'mt-[110px]', // because dropdown takes up space
        'xs:mt-0',
        'grid',
        'grid-cols-2',
        'xs:grid-cols-2',
        'sm:grid-cols-5',
        'xl:grid-cols-8',
        '2xl:grid-cols-10',
        'h-fit',
        'overflow-y-auto',
    );

    const closetToRender = useSelector(clothSelector);

    const [firstTypeSelected, setFirstTypeSelected] = useState(ALL);
    const [secondTypeSelected, setSecondTypeSelected] = useState(ALL);
    const [secondLayerDefaultOption, clearSecondLayerDefaultOption] = useState(ALL);

    return (
        <div className="filter-closet flex p-2 min-w-24
            xs:flex-col h-full
        "
            style={{
                rowGap: '2em',
            }}
        >
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
            {/* <hr className="h-1 w-full bg-slate-300 border-0"/> */}
            <div className={filterResultClass}>
                {closetToRender.map(item => {
                    if ((item.firstType === firstTypeSelected && item.secondType === secondTypeSelected)
                        || (item.firstType === firstTypeSelected && secondLayerDefaultOption === ALL
                            || firstTypeSelected === ALL)
                    ) {
                        return (
                            <div className="cloth-item-container p-2">
                                <ClothItem
                                    key={item.id}
                                    className={clothItemClass}
                                    clothID={item.id}
                                    imgFile={item.file}
                                    blobURL={item.blobURL}
                                    viewMode={'SIMPLE_MODE'}
                                    selectMode={selectMode}
                                    borderRadius={'1em 1em 1em 1em'}
                                    size={'S'}
                                />
                            </div>
                            
                        );
                    };

                })}
            </div>
        </div>

    )
}

export { FilterCloset }