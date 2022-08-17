import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getDaysInMonth } from '../../utils/Datetime';

import { OutfitItem } from '../OutfitItem/OutfitItem';
import { defaultOutfitFiles } from './../../../constants';

const todayDate: Date = new Date();
const currentYear: number = todayDate.getFullYear();
const currentMonth: number = todayDate.getMonth() + 1;
const daysOfCurrentMonth: number = getDaysInMonth(currentYear, currentMonth);

const defaultDateNumber: Array<number> = Array.from(Array(daysOfCurrentMonth).keys());

const defaultCalendarStyle = classnames(
    'calendar-grid',
    'grid',
    'grid-cols-7',
    'gap-2',
    'rounded',
);

const defaultCellStyle = classnames(
    'cell',
    'rounded',
    'bg-zinc-200',
    'py-1',
    'px-1',
);

const defaultDateLabelStyle = classnames(
    'date-label',
    'flex',
    'place-content-center',
    'text-xs',
    'text-zinc-600',
);

export const CalendarGrid = ({
    primary, backgroundColor, size, label, ...props
}) => {

    return (
        <div className={defaultCalendarStyle}>
            {
                defaultDateNumber.map(monthNumber => {
                    return (
                        <div key={`cell-${monthNumber}`}
                            className={defaultCellStyle}
                        >
                            <time className={defaultDateLabelStyle}>{monthNumber}</time>
                            <OutfitItem
                                viewMode='SIMPLE_MODE'
                                size='s'
                                clothFiles={defaultOutfitFiles}
                            />
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
