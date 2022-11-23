import { useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
}

import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { FilterCloset } from '../../components/FilterCloset/FilterCloset';

const viewClosetPageClass = classnames(
    'view-closet-page',
    'grid',
    'h-full',
);



const ViewClosetPage = ({ ...props }: Props) => {

    return (
        <div className={viewClosetPageClass}>
            <FilterCloset
                selectMode={false}
            />
        </div>
    );
};
export {
    ViewClosetPage,
};
export type { Props };