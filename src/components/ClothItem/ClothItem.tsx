import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { imgFolderPath, defaultImgFName } from './../../../constants';
import defaultImg from './../../assets/images/cloth-items/A02_DTB_black.jpg';

const SIMPLE_MODE = 'SIMPLE_MODE';
const COMPLEX_MODE = 'COMPLEX_MODE';

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    size: 's' | 'm' | 'l',
    imgFile: string,
}

const ClothItem = ({ ...props }: Props) => {
    const {
        imgFile,
        size = 's',
        viewMode,
    } = props;

    const styleClassNames = classnames(
        'cloth-item',
        'flex',
        'w-100',
        'h-100',
        'rounded',
        'bg-white',
        'items-center',
    )
    return (
        <div
            className={styleClassNames}
        >
            <img className={'bg-cover'} src={imgFile} alt={imgFile} />
        </div>
    )
}

export {
    ClothItem,
};
export type { Props }