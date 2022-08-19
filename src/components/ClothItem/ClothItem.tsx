import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { imgFolderPath, defaultImgFName } from './../../../constants';
import defaultImg from './../../assets/images/cloth-items/A02_DTB_black.jpg';

const SIMPLE_MODE = 'SIMPLE_MODE';
const COMPLEX_MODE = 'COMPLEX_MODE';

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    imgFile: string,
    borderRadius: string,
    position: string,
}

const ClothItem = ({ ...props }: Props) => {
    const {
        imgFile,
        viewMode,
        borderRadius,
    } = props;

    const wrapperStyleClassNames = classnames(
        'cloth-item',
        'flex',
        'w-full',
        'h-full',
        'bg-zinc-100',
        'items-center',
        'bg-cover',
    )
    return (
        <div
            className={wrapperStyleClassNames}
            style={{
                borderRadius: borderRadius,
                backgroundImage: `url("./../../assets/images/cloth-items/${imgFile}")`,
            }}
        >
        </div>
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