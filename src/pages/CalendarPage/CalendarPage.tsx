interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';

import { CalendarGrid } from '../../components/CalendarGrid/CalendarGrid';

const CalendarPage = () => {
    return (
        <div className='calendar-page page'>
            <CalendarGrid />
        </div>
    );
};
export {
    CalendarPage,
};
export type { Props };