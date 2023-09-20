interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';

import { CalendarGrid } from '../../components/CalendarGrid/CalendarGrid';
import classnames from 'classnames';

import './ViewCalendarPage.scss';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { useDispatch, useSelector } from 'react-redux';
import { zoomInSelector } from '../../reducers/zoomedInArea';


const defaultClassName = classnames(
    'flex',
    'flex-col',
    'sm:flex-row',
    'sm:pt-[54px]',
    'pt-0',
);

const zoomedInClass = classnames(
    'zoomed-in-area',
    'flex',
    'w-full',
    'sm:w-max-[50vw]',
    'sm:w-[50vw]',
    'text-slate-400',
    'p-3',
    'text-center',
    'items-center',
    'justify-center',
)

const ViewCalendarPage = () => {
    const dispatch = useDispatch();
    const {
        viewMode,
        clothIDs,
    } = useSelector(zoomInSelector);

    return (
        <div className={`view-calendar-page page ${defaultClassName}`}
        >
            <div className={zoomedInClass}
            >
                <OutfitItem viewMode={viewMode} clothIDs={clothIDs} />
            </div>
            <CalendarGrid label={'primary'} />
        </div>
    );
};
export {
    ViewCalendarPage,
};
export type { Props };