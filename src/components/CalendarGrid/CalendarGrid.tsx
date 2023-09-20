import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { OutfitItem } from '../OutfitItem/OutfitItem';
import { TimeTravelBtn } from '../TimeTravelBtn/TimeTravelBtn';
import { setZoomedInAreaContent } from '../../actions/zoomedInArea';
import { useDispatch, useSelector } from 'react-redux';

import { outfiitDateSelector } from '../../reducers/outfitDate';

import {
    dayNamesInWeek,
    numOfDaysOfCurrentMonth,

} from './../../utils/Datetime';


import { useTranslation } from 'react-i18next';
import { puzzleSelector } from '../../reducers/puzzles';

const defaultDateNumber: Array<number> =
    Array.from(
        Array(numOfDaysOfCurrentMonth).keys()
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
    'gap-1',
    'flex',
    'text-xs',
    'text-center',
    'py-2',
    'text-zinc-400',
    'w-full',
    'max-w-[200px]',
    'sm:w-[80%]',
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
    'sm:w-[80%]',
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
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const outfitDate = useSelector(outfiitDateSelector);
    const puzzles = useSelector(puzzleSelector);

    const onOutfitCellClick = (clothFiles) => {
        dispatch(setZoomedInAreaContent({
            viewMode: 'SIMPLE_MODE',
            clothIDs: clothFiles,
        }));
    }

    return (
        <div className={calendarGridClass}>
            <TimeTravelBtn />
            <div className={dayNamesClass}>
                {
                    dayNamesInWeek.map(dayName => (
                        <time key={dayName}>{t(`weekDay.${dayName}`)}</time>
                    ))
                }
            </div>
            <div className={defaultOutfitGridClass}>
                {
                    outfitDate.outfitDateTupleArr.map((tuple, i) => {
                        console.log(tuple, i);
                        const mockOutfitId = tuple[1];
                        const mockClothIDs: number[] = puzzles.find(
                            outfit => outfit.id.toString() === mockOutfitId.toString()
                        )?.clothes;
                        return (
                            <div key={tuple[0]}
                                className={defaultCellStyle}
                                onClick={() => {
                                    onOutfitCellClick(mockClothIDs)
                                }}
                                style={{ gridTemplateRows: '20px auto' }}
                            >
                                <time
                                    className={defaultDateLabelStyle}
                                >
                                    {i + 1 /**date */}
                                </time>
                                <OutfitItem
                                    viewMode='SIMPLE_MODE'
                                    clothIDs={mockClothIDs}
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
