import React, {
    useEffect, useState,
} from 'react'

import { useSelector } from 'react-redux';
import { pickedClothItemSelector } from '../../reducers/pickedClothItems';

import classnames from 'classnames'
import { MAX_OUTFIT_ITEM_SIZE } from '../../../constants.tsx';
import { mockCloset, clothProps } from './../../mockData/mockCloset';
import { genBGImgFilePathByEnv, genImgFilePathByEnv } from '../../utils/filename';

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

    const [clothFiles, setClothFiles] = useState(Array(MAX_OUTFIT_ITEM_SIZE).fill(''));

    useEffect(() => {
        let files: Array<string> = [];
        if (pickedClothItems) {
            for (let i = 0; i < pickedClothItems.length; i++) {
                const cloth = mockCloset.find(el => el.id === pickedClothItems[i]);
                if (cloth) {
                    files.push(cloth.file);
                } else {
                    files.push('');
                }
            }
            for (let i = 0; i + pickedClothItems.length < MAX_OUTFIT_ITEM_SIZE; i++) {
                files.push('')
            }
            setClothFiles(files);
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
            {clothFiles.map((el, index) => (
                <div className={imgClass} key={index}
                    style={{ backgroundImage: genBGImgFilePathByEnv(el, "./../../assets") }}
                />
            ))}
        </div>
    )
}

export { Puzzle }