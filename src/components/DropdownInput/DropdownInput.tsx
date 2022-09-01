import React, { HTMLAttributes, useState } from 'react'
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faArrowDown);

interface Props extends HTMLAttributes<HTMLDivElement> {
    optionList: Array<string>,
};

const dropdownInputClass = classnames(
    'dropdown-input',
    'p-2',
    'flex',
    'flex-col',
    'rounded',
    'bg-slate-100',
    'h-8',
);

const firstRowClass = classnames(
    'first-rorw',
    'cursor-pointer',
    'flex',
    'w-48',
    'justify-between',
    'items-center',
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
    'w-48',
    'bg-slate-200',
    'rounded',
);
const liClass = classnames(
    'dropdown-li',
    'flex',
    'cursor-pointer',
    'hover:bg-slate-300',
);

const DropdownInput = ({ optionList }) => {
    const [isListOn, setIsListOn] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Please Select');

    const onDropdownIconClick = () => {
        setIsListOn(true);
    };

    const onListItemClick = (option) => {
        setSelectedOption(option);
        setIsListOn(false);
    };
    return (
        <div className={dropdownInputClass}>
            <span className={firstRowClass} onClick={onDropdownIconClick}>
                <span className={selectedOptionClass}>{selectedOption}</span>
                <FontAwesomeIcon icon={`fa-solid fa-arrow-down`}
                    className={dropdownIconClass}
                />
            </span>
            <ul className={`${ulClass} ${isListOn ? '' : 'hidden'}`}>
                {optionList.map(option => (
                    <li className={liClass}
                        onClick={() => { onListItemClick(option) }}>{option}
                    </li>))}
            </ul>
        </div>
    )
}

export { DropdownInput };
export type { Props };