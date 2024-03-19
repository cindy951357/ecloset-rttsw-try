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
    'w-24',
    'text-xs',
    'xs:text-base',
    'h-8',
    'xs:w-44',
    'box-border',
    'm-2',
);

const firstRowClass = classnames(
    'first-row',
    'cursor-pointer',
    'flex',
    'w-full',
    'justify-between',
    'p-1',
);

const selectedOptionClass = classnames(
    'selected-option',
    'flex',
    'items-center',
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
    'p-2',
    'my-2',
    'items-center',
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
        setIsListOn(!isListOn);
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