import React from 'react'

import classnames from 'classnames';
import { FilterCloset } from '../../components/FilterCloset/FilterCloset';

const addOutfitPageClass = classnames(
    'add-outfit-page',
);

const AddOutfitPage = () => {
    return (
        <div className={addOutfitPageClass}>
            <FilterCloset selectMode />
        </div>
    )
}

export { AddOutfitPage };