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
    'sm:max-w-[700px]',
    'sm:min-w-[500px]',
)

const dayNamesClass = classnames(
    'day-names',
    'grid',
    'grid-cols-7',
    'col-span-7',
    'flex',
    'text-xs',
    'text-center',
    'xs:py-[2px]',
    'text-zinc-400',
    'w-full',
    'place-self-center',
);

const defaultOutfitGridClass = classnames(
    'outfit-grid',
    'w-fit',
    'grid',
    'grid-cols-7',
    'gap-0',
    'rounded',
    'flex',
    'justify-center',
    'items-center',
    'place-self-center',
);

const defaultCellStyle = classnames(
    'cell',
    'grid',
    'gap-1',
    'h-full',
    'w-10',
    'h-10',
    'xs:w-12',
    'xs:h-12',
    'sm:w-16',
    'sm:h-16',
    'lg:w-20',
    'lg:h-20',
    '2xl:w-24',
    '2xl:h-24',
    'rounded',
    'px-[1px]',
    'grayscale',
    'hover:grayscale-0',
);

const defaultDateLabelStyle = classnames(
    'date-label',
    'flex',
    'place-content-center',
    'text-[7px]',
    'xs:text-[9px]',
    'text-zinc-400',
    'py-[2px]',
);

export const CalendarGrid = ({
    primary, backgroundColor, size, label, ...props
}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const outfitDate = useSelector(outfiitDateSelector);
    const puzzles = useSelector(puzzleSelector);

    const onOutfitCellClick = (clothFiles, mockOutfitId) => {
        const tagsToDispatch = clothFiles === undefined 
        ? [] 
        : puzzles.find(
            outfit => outfit.id.toString() === mockOutfitId.toString()
            )?.tags;
        

        dispatch(setZoomedInAreaContent({
            viewMode: 'SIMPLE_MODE',
            clothIDs: clothFiles,
            tags: tagsToDispatch === undefined ? [] : tagsToDispatch,
        }));
    }

    return (
        <div className={calendarGridClass}>
            <TimeTravelBtn />
            
            <div className={defaultOutfitGridClass}>
                <div className={dayNamesClass}>
                    {
                        dayNamesInWeek.map(dayName => (
                            <time key={dayName}>{t(`weekDay.${dayName}`)}</time>
                        ))
                    }
                </div>
                {

                    outfitDate.outfitDateTupleArr.map((tuple, i) => {
                        const mockOutfitId = tuple[1];
                        let mockClothIDs: number[] = puzzles.find(
                            outfit => outfit.id.toString() === mockOutfitId.toString()
                        )?.clothes;
                        if (mockClothIDs === undefined) {
                            mockClothIDs = [-1, -1, -1, -1];
                        }
                        return (
                            <div key={tuple[0]}
                                className={defaultCellStyle}
                                onClick={() => {
                                    onOutfitCellClick(mockClothIDs, mockOutfitId)
                                }}
                                style={{ gridTemplateRows: '13px auto' }}
                            >
                                <time
                                    className={defaultDateLabelStyle}
                                >
                                    {/* date */}
                                    {i + 1}
                                </time>
                                <div className="rounded-2xl bg-white hover:shadow-2xl">
                                    <OutfitItem
                                        viewMode='SIMPLE_MODE'
                                        clothIDs={mockClothIDs}
                                    />
                                </div>                                
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
