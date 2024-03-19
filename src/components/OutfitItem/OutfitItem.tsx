import React, {
    ReactNode,
    HTMLAttributes,
    useEffect,
} from 'react'
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
    size: 'S'|'M'|'L',
}

export const styleClassNames = classnames(
    'grid',
    'grid-cols-2',
    'grid-rows-2',
    'gap-0',
    'bg-white',
    'rounded-xl',
    'px-0.5',
    'place-content-center',
    'flex',
    'justify-self-center',
    'self-center',
    'h-full',
    'w-full',
    'max-w-[170px]',
    'max-h-[170px]',
    'sm:max-w-[250px]',
    'sm:max-h-[250px]',
    'min-w-[26px]',
    'min-h-[26px]',
    'sm:min-w-[30px]',
    'sm:min-h-[30px]',
    'aspect-square',
    'cursor-pointer',
);

const OutfitItem = ({ ...props }: Props) => {
    const {
        clothIDs,
        viewMode,
        size
    } = props;
    return (
        <div
            className={`outfit-item ${styleClassNames}`}
            style={{ gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr' }}
        >

            {clothIDs && clothIDs.map((clothID, i) => {
                if (clothID > 0) {
                    let file;
                    const found = mockCloset.find(el => el.id === clothID)
                    if (found) {
                        file = mockCloset.find(el => el.id === clothID)?.file;
                    }
                    return (
                        <ClothItem
                            key={i}
                            viewMode={viewMode}
                            selectMode={false}
                            imgFile={file}
                            borderRadius={borderRadiusList[i]}
                            position={positionList[i]}
                            size={size}
                        ></ClothItem>
                    )
                } else {
                    return (
                        <ClothItem
                            key={i}
                            viewMode={viewMode}
                            selectMode={false}
                            imgFile={''}
                            borderRadius={borderRadiusList[i]}
                            position={positionList[i]}
                            size={size}
                        ></ClothItem>
                    )
                }

            })}
        </div>
    )
}

export {
    OutfitItem,
};
export type { Props }