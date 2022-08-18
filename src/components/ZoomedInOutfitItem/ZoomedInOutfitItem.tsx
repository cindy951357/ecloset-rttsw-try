import React from 'react'
import classnames from 'classnames';

import {
    OutfitItem,
    styleClassNames as outfitStyleClassName
} from './../OutfitItem/OutfitItem';


interface Props {
    viewMode: 'SIMPLE_MODE' | 'COMPLEX_MODE',
    selectedDlothFiles: Array<string>,
    show: Boolean,
}

const ZoomedInOutfitItem = ({ selectedDlothFiles, show }: Props) => {
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
                clothFiles={selectedDlothFiles}
            />
        </div>
    )
}

export { ZoomedInOutfitItem };

export type { Props };
