import React, {
    useState,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';

import { OutfitItem } from '../OutfitItem/OutfitItem';
import { defaultOutfitFiles, defaultOutfitImgFileNames } from './../../../constants';

import { setZoomedInAreaContent } from '../../actions/zoomedInArea';
import { useDispatch } from 'react-redux';

import {
    dayNamesInWeek,
    numOfDaysOfCurrentMonth,
    getNumOfDaysInThisMonth,
    generateDatesOfCurMonth,
} from './../../utils/Datetime';

import {
    mockOutfits,
} from '../../mockData/mockOutfit';
import {
    mockOutfitDateSimple
} from '../../mockData/mockOutfitDate';
import { generateMockOutfitDateTuplesArr } from '../../mockData/mockOutfitDate';

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
    const dispatch = useDispatch();

    const [outfitDateTupleArr, setOutfitDateTupleArr] = useState(generateMockOutfitDateTuplesArr(2022, 8));


    const onOutfitCellClick = (clothFiles) => {
        dispatch(setZoomedInAreaContent({
            viewMode: 'SIMPLE_MODE',
            clothFileNames: clothFiles,
        }));
    }

    return (
        <div className={calendarGridClass}>
            <div className={dayNamesClass}>
                {
                    dayNamesInWeek.map(dayName => (
                        <time key={dayName}>{dayName}</time>
                    ))
                }
            </div>
            <div className={defaultOutfitGridClass}>
                {
                    outfitDateTupleArr.map((tuple, i) => {
                        const mockOutfitId = tuple[1];
                        const mockClothFileNames: [string, string, string, string] = mockOutfits.find(
                            outfit => outfit.id.toString() === mockOutfitId.toString()
                        )?.clothes ?? defaultOutfitImgFileNames;
                        return (
                            <div key={tuple[0]}
                                className={defaultCellStyle}
                                onClick={() => {
                                    onOutfitCellClick(mockClothFileNames)
                                }}
                                style={{ gridTemplateRows: '20px auto' }}
                            >
                                <time
                                    className={defaultDateLabelStyle}
                                >
                                    {i + 1}
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
