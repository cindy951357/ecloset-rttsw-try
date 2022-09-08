import React, {
    HTMLAttributes,
    useState,
} from 'react'

import { useDispatch } from 'react-redux';

import classnames from 'classnames';

import {
    env,
} from './../../../constants';

import CheckIcon from './../../assets/images/icons/check-solid.svg';
import { deletePickedClothItems, insertPickedClothItems } from '../../actions/pickedClothItems';
import { genBGImgFilePathByEnv } from '../../utils/filename';

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

    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(false);

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
        },
        {
            'border-4': isChecked,
            'border-rose-200': isChecked,
        }
    );

    const onClothItemClick = clothID => {
        if (!selectMode) {
            return;
        }
        if (!isChecked) {
            dispatch(insertPickedClothItems(clothID));
            setIsChecked(true);
        } else {
            dispatch(deletePickedClothItems(clothID));
            setIsChecked(false);
        }

    }

    return (
        <div
            className={wrapperStyleClassNames}
            style={{
                borderRadius: borderRadius,
                backgroundImage: genBGImgFilePathByEnv(imgFile, "./../../assets"),
            }}
            onClick={() => { onClothItemClick(clothID) }}
        >
            {isChecked && <img src={CheckIcon} alt='check' />}
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