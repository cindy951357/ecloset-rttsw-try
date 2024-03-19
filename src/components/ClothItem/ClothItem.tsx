import React, {
    HTMLAttributes,
    useState,
} from 'react'

import { useDispatch } from 'react-redux';

import classnames from 'classnames';

import {
    env,
} from './../../../constants';

import { deletePickedClothItems, insertPickedClothItems } from '../../actions/pickedClothItems';
import { genBGImgFilePathByEnv } from '../../utils/filename';

import { useSelector } from 'react-redux';
import { pickedClothItemSelector } from '../../reducers/pickedClothItems';

import { MAX_OUTFIT_ITEM_SIZE } from '../../../constants';

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
    blobURL: string,
}

const ClothItem = ({ ...props }: Props) => {
    const {
        imgFile,
        viewMode,
        size,
        borderRadius,
        clothID,
        selectMode,
        blobURL,
    } = props;

    const dispatch = useDispatch();

    const [isChecked, setIsChecked] = useState(false);

    const pickedClothItem = useSelector(pickedClothItemSelector);

    const wrapperStyleClassNames = classnames(
        'cloth-item',
        'flex',
        {
            'w-full': size === 'L' || size === 'M',
            'h-full': size === 'L' || size === 'M',
            'sm:w-max-[100px]': size === 'M',
            'sm:h-max-[100px]': size === 'M',
            'w-17': size === 'S',
            'h-17': size === 'S',
            'md:w-24': size === 'S',
            'md:h-24': size === 'S',
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
            if (pickedClothItem.length >= MAX_OUTFIT_ITEM_SIZE) {
                return;
            }
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
                backgroundImage:
                    imgFile ? genBGImgFilePathByEnv(imgFile, "./../../assets") : `url(${blobURL})`,
            }}
            onClick={() => { clothID > 0 && onClothItemClick(clothID) }}
        >

            {isChecked && <img src={'./../../assets/images/icons/check-solid.svg'} alt='check' />}
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