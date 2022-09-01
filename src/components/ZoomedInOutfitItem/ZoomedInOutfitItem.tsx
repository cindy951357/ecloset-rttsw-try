import React from 'react'
import classnames from 'classnames';

import {
    OutfitItem,
    styleClassNames as outfitStyleClassName
} from './../OutfitItem/OutfitItem';


interface Props {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    selectedClothFiles: [string, string, string, string],
    show: Boolean,
}

const ZoomedInOutfitItem = ({ selectedClothFiles, show }: Props) => {
    const screenStyleClassName = classnames(

        {
            'hidden': !show,
        }
    )
    return (
        <div
            className={`zoomed-in-outfit-item`}
        >
            <OutfitItem
                viewMode='SIMPLE_MODE'
                clothFileNames={selectedClothFiles}
            />
        </div>
    )
}

export { ZoomedInOutfitItem };

export type { Props };
