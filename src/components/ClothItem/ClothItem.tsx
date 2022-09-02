import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import {
    env,
    imgFolderPath,
    defaultImgFName
} from './../../../constants';
import defaultImg from './../../assets/images/cloth-items/A02_DTB_black.jpg';

const SIMPLE_MODE = 'SIMPLE_MODE';
const COMPLEX_MODE = 'COMPLEX_MODE';

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    imgFile: string,
    borderRadius: string,
    position: string,
    size: 'S' | 'M' | 'L',
}

const ClothItem = ({ ...props }: Props) => {
    const {
        imgFile,
        viewMode,
        size,
        borderRadius,
    } = props;

    const wrapperStyleClassNames = classnames(
        'cloth-item',
        'flex',
        {
            'w-full': size === 'L' || size === 'M',
            'h-full': size === 'L' || size === 'M',
            'w-48': size === 'S',
            'h-48': size === 'S',
        },
        'bg-zinc-100',
        'items-center',
        'bg-cover',
    )
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