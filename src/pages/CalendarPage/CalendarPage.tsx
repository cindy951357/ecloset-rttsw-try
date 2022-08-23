interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';

import { CalendarGrid } from '../../components/CalendarGrid/CalendarGrid';
import classnames from 'classnames';

import './CalendarPage.scss';
import { OutfitItem } from '../../components/OutfitItem/OutfitItem';
import { useDispatch, useSelector } from 'react-redux';
import { zoomInSelector } from '../../reducers/zoomedInArea';
import { outfiitDateSelector } from '../../reducers/outfitDate';


const defaultClassName = classnames(
    'flex',
    'flex-col',
    'sm:flex-row',
);

const zoomedInClass = classnames(
    'zoomed-in-area',
    'flex',
    'w-full',
    'text-slate-400',
    'p-3',
    'text-center',
    'items-center',
    'justify-center',
)

const CalendarPage = () => {
    const dispatch = useDispatch();
    const {
        viewMode,
        clothFileNames,
    } = useSelector(zoomInSelector);
    return (
        <div className={`calendar-page page ${defaultClassName}`}
        // style={rwdStyle}
        >
            <div className={zoomedInClass}
            >

                <OutfitItem viewMode={viewMode} clothFileNames={clothFileNames} />
            </div>
            <CalendarGrid />
        </div>
    );
};
export {
    CalendarPage,
};
export type { Props };