import React, { useState } from 'react';
import { mockOutfits } from '../../mockData/mockOutfit';

import classnames from 'classnames';
import { OutfitItem } from '../OutfitItem/OutfitItem';

import './OutfitList.scss';

// tutorial: https://moderncss.dev/pure-css-custom-styled-radio-buttons/

const inputRadioClass = classnames(
    'input-radio',
    'appearance-none',
    'grid',
    'translate-x-[-0.1em]',
    'w-4',
    'h-4',
    'cursor-pointer',
    'border-2',
    'border-solid',
    'rounded-full', // a circle
    'place-content-center',
    'm-0',
    'border-rose-300',
    'before:content=[""]',
    'before:w-[0.6em]',
    'before:h-[0.6em]',
    'before:rounded-full',
    'before:bg-rose-300', //input[type="radio"]::before { background-color: xxx }
    'before:scale-0',
    'checked:before:scale-1',
);

const outfitWithRadioBtnClass = classnames(
    'outfit-with-radio-btn',
    'w-96',
    'flex',
    'p-2',
    'm-2',
);

const checkedOutfitStyle = classnames(
    'border-2',
    'border-rose-300',
    'rounded-md'
);

const OutfitWithRadioBtn = ({
    clothFileNames,
    numbering,
    setID,
    checkedOutfitID, /** Debug */
}) => {
    return (
        <div className={`${outfitWithRadioBtnClass} ${checkedOutfitID === numbering ? checkedOutfitStyle : ''}`}>
            <label className="form-control">
                <input type="radio" name="radio"
                    className={inputRadioClass}
                    onChange={() => { setID(numbering) }} /**Debug: change to error func! */
                />
                {numbering}
            </label>
            <OutfitItem clothFileNames={clothFileNames} viewMode='SIMPLE_MODE' />
        </div>

    )
};

const outfitListClass = classnames(
    'outfit-list',
    'list',
    'flex',
    'flex-wrap',
    'h-full',
    'w-full',
)

const OutfitList = ({ setOutfitID, checkedOutfitID }) => {

    return (
        <div className={outfitListClass}>
            {mockOutfits.map((outfit, i) => {
                return (
                    i > 0 && <OutfitWithRadioBtn
                        key={i}
                        clothFileNames={
                            outfit.clothes}
                        numbering={outfit.id}
                        setID={setOutfitID}
                        checkedOutfitID={checkedOutfitID}
                    />

                )
            })}
        </div>
    );
};
export { OutfitList };