import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getDaysInMonth } from '../../utils/Datetime';

import { OutfitItem } from '../OutfitItem/OutfitItem';
import { defaultOutfitFiles, defaultOutfitImgFileNames } from './../../../constants';

import { setPopupShowAndContent } from '../../actions/popup';
import { useDispatch } from 'react-redux';

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
    'h-full',
);

const defaultCellStyle = classnames(
    'cell',
    'grid',
    'rounded',
    'py-1',
    'px-1',
);

const defaultDateLabelStyle = classnames(
    'date-label',
    'flex',
    'place-content-center',
    'text-xs',
    'text-zinc-400',
    'py-1',
);

export const CalendarGrid = ({
    primary, backgroundColor, size, label, ...props
}) => {
    const dispatch = useDispatch();

    const onOutfitCellClick = (clothFiles) => {
        dispatch(setPopupShowAndContent({
            isShow: true,
            content: {
                viewMode: 'SIMPLE_MODE',
                clothFiles: clothFiles,
            }
        }));
    }

    return (
        <div className={defaultCalendarStyle}>
            {
                defaultDateNumber.map(dateNumber => {
                    return (
                        <div key={`cell-${dateNumber}`}
                            className={defaultCellStyle}
                            onClick={() => {
                                onOutfitCellClick(defaultOutfitFiles)
                            }}
                            style={{ gridTemplateRows: '1fr 5fr' }}
                        >
                            <time
                                className={defaultDateLabelStyle}
                            >
                                {dateNumber}
                            </time>
                            <OutfitItem
                                viewMode='SIMPLE_MODE'
                                clothFileNames={defaultOutfitImgFileNames}
                            />
                        </div>
                    )
                })}
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
