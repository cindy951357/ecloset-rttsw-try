interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';

import { CalendarGrid } from '../../components/CalendarGrid/CalendarGrid';
import classnames from 'classnames';

import './CalendarPage.scss';

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
    return (
        <div className={`calendar-page page ${defaultClassName}`}
        // style={rwdStyle}
        >
            <div className={zoomedInClass}
            >

                Zoomed In
            </div>
            <CalendarGrid />
        </div>
    );
};
export {
    CalendarPage,
};
export type { Props };