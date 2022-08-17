import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { ClothItem } from './../ClothItem/ClothItem';

const imgFolderPath = './../../assets/images/cloth-items'

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    size: 's' | 'm' | 'l',
    clothFiles: Array<string>,
}

const styleClassNames = classnames(
    'outfit-item',
    'grid',
    'grid-cols-2',
    'grid-rows-2',
    'h-fit',
    'px-0.5',
    'place-content-center',
);

const OutfitItem = ({ ...props }: Props) => {
    const {
        clothFiles,
        size,
        viewMode,
    } = props;


    return (
        <div
            className={styleClassNames}
        >

            {clothFiles.map((file, i) => {
                console.log(file)
                return (
                    <ClothItem
                        key={i}
                        viewMode={viewMode}
                        size={'s'}
                        imgFile={`${file}`}
                    ></ClothItem>
                )
            })}
        </div>
    )
}

export {
    OutfitItem,
};
export type { Props }