import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { ClothItem } from './../ClothItem/ClothItem';

const imgFolderPath = './../../assets/images/cloth-items'

const borderRadiusList = [
    '1em 0 0 0',
    '0 1em 0 0',
    '0 0 0 1em',
    '0 0 1em 0',
];
const positionList = [

];

interface Props extends HTMLAttributes<HTMLDivElement> {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    // clothFiles: Array<typeof Image>,
    clothFileNames: Array<string>,
}

export const styleClassNames = classnames(
    'grid',
    'grid-cols-2',
    'grid-rows-2',
    'gap-0',
    'px-0.5',
    'place-content-center',
    'flex',
    'justify-self-center',
    'self-center',
    'h-full',
    'w-full',
    'max-w-[300px]',
    'max-h-[300px]'
);

const OutfitItem = ({ ...props }: Props) => {
    const {
        clothFileNames,
        viewMode,
    } = props;


    return (
        <div
            className={`outfit-item ${styleClassNames}`}
        >

            {clothFileNames.map((file, i) => {
                return (
                    <ClothItem
                        key={i}
                        viewMode={viewMode}
                        imgFile={`${file}`}
                        borderRadius={borderRadiusList[i]}
                        position={positionList[i]}
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