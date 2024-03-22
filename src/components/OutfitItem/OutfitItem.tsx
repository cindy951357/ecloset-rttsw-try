import React, {
    ReactNode,
    HTMLAttributes,
    useEffect,
} from 'react'
import classnames from 'classnames';

import { ClothItem } from './../ClothItem/ClothItem';
import { mockCloset } from '../../mockData/mockCloset';
import { clothSelector } from '../../reducers/cloth';
import { useSelector } from 'react-redux';

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
    'w-full',
    'h-full',
    'aspect-square',
    'cursor-pointer',
);

const OutfitItem = ({ ...props }: Props) => {
    const {
        clothIDs,
        viewMode,
        size
    } = props;
    const clothState = useSelector(clothSelector);
    return (
        <div
            className={`outfit-item ${styleClassNames}`}
            style={{ gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr' }}
        >

            {clothIDs && clothIDs.map((clothID, i) => {
                if (clothID > 0) {
                    let file='';
                    let blobURL='';
                    let isUsingBlobURL;
                    const found = clothState.find(el => el.id === clothID)
                    if (found) {
                        file = clothState.find(el => el.id === clothID)?.file;
                        if (file === '') {
                            blobURL = clothState.find(el => el.id === clothID)?.blobURL;
                            isUsingBlobURL = true;
                        } else {
                            isUsingBlobURL = false;
                        }
                    }
                    return (
                        <ClothItem
                            key={i}
                            viewMode={viewMode}
                            selectMode={false}
                            imgFile={file}
                            blobURL={blobURL}
                            borderRadius={borderRadiusList[i]}
                            position={positionList[i]}
                            isUsingBlobURL={isUsingBlobURL}
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
                            isUsingBlobURL={false}
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