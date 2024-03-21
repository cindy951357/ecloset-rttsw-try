import React, {
    useEffect, useState,
} from 'react'

import { useSelector } from 'react-redux';
import { pickedClothItemSelector } from '../../reducers/pickedClothItems';

import classnames from 'classnames'
import { MAX_OUTFIT_ITEM_SIZE } from '../../../constants';
import { mockCloset, clothProps } from './../../mockData/mockCloset';
import { genBGImgFilePathByEnv, genImgFilePathByEnv } from '../../utils/filename';
import { clothSelector } from '../../reducers/cloth';

const puzzleClass: string = classnames(
    'puzzle',
    'flex',
    'grid',
    'w-[170px]',
    'min-h-[170px]',
    'flex',
    'justify-self-center',
    'rounded-xl',
    'bg-rose-100',
);

const imgClass = classnames(
    'puzzle-img',
    'w-full',
    'h-full',
    'flex',
    'rounded-xl',
    'bg-rose-100',
    'bg-contain',
    'bg-no-repeat',
    'bg-center',
)


const Puzzle = ({ }) => {
    const pickedClothItems = useSelector(pickedClothItemSelector);
    const clothState = useSelector(clothSelector);
    const [cloths, setCloths] = useState(Array(MAX_OUTFIT_ITEM_SIZE).fill(null));

    useEffect(() => {
        let array = [];
        if (pickedClothItems) {
            for (let i = 0; i < pickedClothItems.length; i++) {
                const cloth = clothState.find(el => el.id === pickedClothItems[i].id);
                if (cloth) {
                    array.push(cloth);
                } else {
                    array.push(null);
                }
            }
            for (let i = 0; i + pickedClothItems.length < MAX_OUTFIT_ITEM_SIZE; i++) {
                array.push(null)
            }
            setCloths(array);
        }

    }, [pickedClothItems])

    return (
        <div
            className={puzzleClass}
            style={{
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr'
            }}
        >
            {cloths.map(el => {
                return el !== null && (
                <div className={imgClass} key={el.id}
                    style={{ backgroundImage:
                        el.blobURL === '' 
                        ? genBGImgFilePathByEnv(el.file, "./../../assets")
                        : `url(${el.blobURL})`
                     }}
                />
                )}
            )}
        </div>
    )
}

export { Puzzle }