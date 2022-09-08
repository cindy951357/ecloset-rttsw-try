import React from 'react'

import classnames from 'classnames';
import { FilterCloset } from '../../components/FilterCloset/FilterCloset';
import { Puzzle } from '../../components/Puzzle/Puzzle';

const addOutfitPageClass = classnames(
    'add-outfit-page',
    'grid',
);

const AddOutfitPage = () => {
    return (
        <div className={addOutfitPageClass}
            style={{
                gridTemplateRows: '200px auto',
            }}
        >
            <Puzzle />
            <FilterCloset selectMode />
        </div>
    )
}

export { AddOutfitPage };