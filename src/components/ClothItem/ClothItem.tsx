import React, {
    HTMLAttributes,
    useState,
} from 'react'
import classnames from 'classnames';

import {
    env,
} from './../../../constants';

import CheckIcon from './../../assets/images/icons/check-solid.svg';
import { insertPickedClothItems } from '../../actions/pickedClothItems';

const SIMPLE_MODE = 'SIMPLE_MODE';
const COMPLEX_MODE = 'COMPLEX_MODE';

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    selectMode: Boolean,
    imgFile: string,
    borderRadius: string,
    position: string,
    size: 'S' | 'M' | 'L',
    clothID: number,
}

const ClothItem = ({ ...props }: Props) => {
    const {
        imgFile,
        viewMode,
        size,
        borderRadius,
        clothID,
        selectMode,
    } = props;

    const wrapperStyleClassNames = classnames(
        'cloth-item',
        'flex',
        {
            'w-full': size === 'L' || size === 'M',
            'h-full': size === 'L' || size === 'M',
            'w-40': size === 'S',
            'h-40': size === 'S',
            'md:w-48': size === 'S',
            'md:h-48': size === 'S',
        },
        'bg-zinc-100',
        'items-center',
        'bg-cover',
        {
            'cursor-pointer': selectMode,
        }
    );

    const onClothItemClick = clothID => {
        if (!selectMode) {
            return;
        }
        insertPickedClothItems(clothID);
    }

    return (
        <div
            className={wrapperStyleClassNames}
            style={{
                borderRadius: borderRadius,
                backgroundImage:
                    env === 'development'
                        ? `url("./../../assets/images/cloth-items/${imgFile}")`
                        : `url("./images/${imgFile}")`
                ,
            }}
        >

        </div >
    )
}

ClothItem.defaultProps = {
    borderRadius: '1em 1em 1em 1em',
    position: '',
}
export {
    ClothItem,
};
export type { Props }