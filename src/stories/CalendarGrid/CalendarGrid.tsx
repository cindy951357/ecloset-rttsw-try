import React from 'react';
import PropTypes from 'prop-types';

import { getDaysInMonth } from '../../utils/Datetime';

const todayDate: Date = new Date();
const currentYear: number = todayDate.getFullYear();
const currentMonth: number = todayDate.getMonth() + 1;
const daysOfCurrentMonth: number = getDaysInMonth(currentYear, currentMonth);



export const CalendarGrid = ({
    primary, backgroundColor, size, label, ...props
}) => {
    const defaultDateNumber: Array<number> = Array.from(Array(daysOfCurrentMonth).keys());

    return (
        <div className='grid grid-cols-7 gap-1'>
            {
                defaultDateNumber.map(monthNumber => {
                    return (
                        <div key={`cell-${monthNumber}`} className='date-cell'>
                            {monthNumber}
                        </div>
                    )
                })
            }
        </div>

    );
};

CalendarGrid.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

CalendarGrid.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
