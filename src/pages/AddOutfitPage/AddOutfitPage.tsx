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
import { clearPickedClothItems } from '../../actions/pickedClothItems';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';


const addOutfitPageClass = classnames(
    'add-outfit-page',
    'grid',
);

const AddOutfitPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const pickedClothItem = useSelector(pickedClothItemSelector);
    const outfits = useSelector(puzzleSelector);

    const onSubmitBtnClick = () => {
        dispatch(insertPuzzle({
            id: outfits.length + 1,
            clothes: pickedClothItem,
            tags: [],
        }));
        dispatch(setPopupShowAndContent({
            isShow: true,
            content: {
                message: t('popup.puzzleIsAdded'),
            }
        }));
        dispatch(clearPickedClothItems({}));

        navigate('/outfit/view-outfit');
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