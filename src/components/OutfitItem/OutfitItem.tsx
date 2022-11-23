import React, { ReactNode, HTMLAttributes } from 'react'
import classnames from 'classnames';

import { ClothItem } from './../ClothItem/ClothItem';
import { mockCloset } from '../../mockData/mockCloset';

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
    clothIDs: number[],
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
    'max-w-[200px]',
    'max-h-[200px]',
    'sm:max-w-[300px]',
    'sm:max-h-[300px]',
    'min-w-[30px]',
    'min-h-[30px]',
    'sm:min-w-[35px]',
    'sm:min-h-[35px]',
    'aspect-square',
    'cursor-pointer',
);

const OutfitItem = ({ ...props }: Props) => {
    const {
        clothIDs,
        viewMode,
    } = props;
    return (
        <div
            className={`outfit-item ${styleClassNames}`}
            style={{ gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr' }}
        >

            {clothIDs.map((clothID, i) => {
                const file = mockCloset.find(el => el.id === clothID).file;
                return (
                    <ClothItem
                        key={i}
                        viewMode={viewMode}
                        selectMode={false}
                        imgFile={file}
                        borderRadius={borderRadiusList[i]}
                        position={positionList[i]}
                        size={'M'}
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