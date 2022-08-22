import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { OutfitItem } from '../OutfitItem/OutfitItem';
import { defaultOutfitFiles, defaultOutfitImgFileNames } from './../../../constants';

import { setPopupShowAndContent } from '../../actions/popup';
import { useDispatch } from 'react-redux';

import {
    dayNamesInWeek,
    daysOfCurrentMonth,
    getNumOfDaysInThisMonth,
} from './../../utils/Datetime';

import {
    mockOutfits,
    mockOutfitDate,
    mockOutfit,
} from '../../mockData/mockOutfit';

const defaultDateNumber: Array<number> =
    Array.from(
        Array(daysOfCurrentMonth).keys()
    ).map(key => key + 1);

const calendarGridClass = classnames(
    'calendar-grid',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'sm:w-full',
)

const dayNamesClass = classnames(
    'day-names',
    'grid',
    'grid-cols-7',
    'gap-2',
    'flex',
    'text-xs',
    'text-center',
    'py-2',
    'text-zinc-400',
    'max-w-[200px]',
    'sm:max-w-full',
    'place-self-center',
);

const defaultOutfitGridClass = classnames(
    'outfit-grid',
    'grid',
    'grid-cols-7',
    'gap-1',
    'rounded',
    'max-w-[200px]',
    'flex',
    'justify-center',
    'items-center',
    'sm:max-w-full',
    'place-self-center',
);

const defaultCellStyle = classnames(
    'cell',
    'grid',
    'h-full',
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
        <div className={calendarGridClass}>
            <div className={dayNamesClass}>
                {
                    dayNamesInWeek.map(dayName => (
                        <time>{dayName}</time>
                    ))
                }
            </div>
            <div className={defaultOutfitGridClass}>
                {
                    defaultDateNumber.map((dateNumber, i) => {
                        const mockOutfitId = mockOutfitDate[i];
                        const mockClothFileNames = mockOutfits.find(
                            outfit => outfit.id.toString() === mockOutfitId.toString()
                        )?.clothes ?? defaultOutfitImgFileNames;
                        return (
                            <div key={`cell-${dateNumber}`}
                                className={defaultCellStyle}
                                onClick={() => {
                                    onOutfitCellClick(defaultOutfitFiles)
                                }}
                                style={{ gridTemplateRows: '20px auto' }}
                            >
                                <time
                                    className={defaultDateLabelStyle}
                                >
                                    {dateNumber}
                                </time>
                                <OutfitItem
                                    viewMode='SIMPLE_MODE'
                                    clothFileNames={mockClothFileNames}
                                />
                            </div>
                        )
                    })}
            </div>
        </div >
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
