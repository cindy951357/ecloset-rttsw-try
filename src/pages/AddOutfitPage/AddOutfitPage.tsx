import React from 'react'
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { pickedClothItemSelector } from '../../reducers/pickedClothItems';


import { FilterCloset } from '../../components/FilterCloset/FilterCloset';
import { Puzzle } from '../../components/Puzzle/Puzzle';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { insertPuzzle } from './../../actions/puzzles';
import { puzzleSelector } from '../../reducers/puzzles';
import { setPopupShowAndContent } from '../../actions/popup';


const addOutfitPageClass = classnames(
    'add-outfit-page',
    'grid',
);

const AddOutfitPage = () => {
    const dispatch = useDispatch();
    const pickedClothItem = useSelector(pickedClothItemSelector);
    const outfits = useSelector(puzzleSelector);

    const onSubmitBtnClick = () => {
        console.log('hi. clicked', pickedClothItem, outfits.length);
        dispatch(insertPuzzle({
            id: outfits.length,
            clothes: pickedClothItem,
            tags: [],
        }));
        // dispatch(setPopupShowAndContent({

        // }))
    }
    return (
        <div className={addOutfitPageClass}
            style={{
                gridTemplateRows: '200px auto',
                rowGap: '2em',
            }}
        >
            <Puzzle />
            <FilterCloset selectMode />
            <SubmitButton
                onClick={() => { onSubmitBtnClick(); }}
            />
        </div>
    )
}

export { AddOutfitPage };