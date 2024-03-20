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
import StyleTag from '../../components/StyleTag/StyleTag';


const defaultClassName = classnames(
    'flex',
    'flex-col',
    'xl:flex-row',
    'pt-0',
    'xs:justify-start',
    'justify-center',
    'items-center',
);

const zoomedInClass = classnames(
    'zoomed-in-area',
    'flex',
    'flex-col',
    'w-full',
    'h-full',
    'xs:w-40',
    'xs:h-40',
    'sm:w-96',
    'sm:h-96',
    'text-slate-400',
    'p-3',
    'text-center',
    'items-center',
    'justify-center',
    'self-center',
)

const ViewCalendarPage = () => {
    const {
        viewMode,
        clothIDs,
    } = useSelector(zoomInSelector);

    return (
        <div className={`view-calendar-page page ${defaultClassName}`}
        >
            <div className="zoom-in-and-style-tags flex flex-col justify-center items-center">
                <div className={zoomedInClass}
                >
                    <OutfitItem viewMode={viewMode} clothIDs={clothIDs} />
                </div>
                <StyleTag/>
            </div>
            
            <CalendarGrid label={'primary'} />
        </div>
    );
};
export {
    ViewCalendarPage,
};
export type { Props };