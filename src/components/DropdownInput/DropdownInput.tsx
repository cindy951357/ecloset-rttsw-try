import React, { HTMLAttributes, useState } from 'react'
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid'
import { ALL } from '../../mockData/mockTypes';

fontawesome.library.add(faArrowDown);

interface Props extends HTMLAttributes<HTMLDivElement> {
    layer: 'FIRST' | 'SECOND',
    optionList: Array<string>,
    setParentSelected: Function,
    clearSecondLayerDefaultOption: Function,
    secondLayerDefaultOption: string,
};

const dropdownInputClass = classnames(
    'dropdown-input',
    'flex',
    'flex-col',
    'rounded',
    'bg-slate-100',
    'h-8',
    'w-48',
    'box-border',
);

const firstRowClass = classnames(
    'first-rorw',
    'cursor-pointer',
    'flex',
    'w-full',
    'justify-between',
    'items-center',
    'p-1',
);

const selectedOptionClass = classnames(
    'selected-option',
    'flex',

);

const dropdownIconClass = classnames(
    'dropdown-icon',
    'flex',
    'align-self-center',
);

const ulClass = classnames(
    'dropdown-ul',
    'flex',
    'flex-col',
    'w-full',
    'bg-slate-200',
    'rounded',
    'z-10',
);
const liClass = classnames(
    'dropdown-li',
    'flex',
    'cursor-pointer',
    'hover:bg-slate-300',
    'w-full',
    'p-1',
);

const DropdownInput = ({
    layer,
    optionList,
    setParentSelected,
    clearSecondLayerDefaultOption,
    secondLayerDefaultOption,
}: Props) => {
    const [isListOn, setIsListOn] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Please Select');

    const onDropdownIconClick = () => {
        setIsListOn(true);
    };

    const onListItemClick = (option) => {
        setSelectedOption(option);
        setIsListOn(false);
        setParentSelected(option);
        if (layer === 'FIRST') {
            clearSecondLayerDefaultOption(ALL);
        } else {
            clearSecondLayerDefaultOption(option);
        }
    };
    return (
        <div className={dropdownInputClass}>
            <span className={firstRowClass} onClick={onDropdownIconClick}>
                <span className={selectedOptionClass}>{
                    layer === 'FIRST' ? selectedOption : secondLayerDefaultOption === ALL ? ALL : selectedOption
                }</span>
                <FontAwesomeIcon icon={`fa-solid fa-arrow-down`}
                    className={dropdownIconClass}
                />
            </span>
            <ul className={`${ulClass} ${isListOn ? '' : 'hidden'}`}>
                {optionList.map(option => (
                    <li
                        key={option}
                        className={liClass}
                        onClick={() => { onListItemClick(option) }}>{option}
                    </li>))}
            </ul>
        </div>
    )
}

export { DropdownInput };
export type { Props };