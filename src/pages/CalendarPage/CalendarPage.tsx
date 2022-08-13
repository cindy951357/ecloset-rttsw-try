interface Props extends HTMLAttributes<HTMLDivElement> {
    variant: String,
    active: Boolean;
}
import { HTMLAttributes } from 'react';
const CalendarPage = () => {
    return (
        <div className='calendar-page page'>
            Calendar Page
        </div>
    );
};
export {
    CalendarPage,
};
export type { Props };