interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';

import { CalendarGrid } from '../../components/CalendarGrid/CalendarGrid';
import classnames from 'classnames';

const defaultClassName = classnames(
    'grid',
    'grid-rows-2',
    'grid-cols-1',
);

const CalendarPage = () => {
    return (
        <div className={`calendar-page page ${defaultClassName}`}
            style={{ gridTemplateRows: 'auto auto' }}
        >
            <div></div>
            <CalendarGrid />
        </div>
    );
};
export {
    CalendarPage,
};
export type { Props };