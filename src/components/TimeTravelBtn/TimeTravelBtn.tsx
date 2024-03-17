import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { outfiitDateSelector } from '../../reducers/outfitDate';
import { travelOneMonth } from '../../actions/outfitDate';

export const TimeTravelBtn = () => {
    const dispatch = useDispatch();
    const outfitDate = useSelector(outfiitDateSelector);

    const onTravelOneMonth = plusOrMinus => {
        dispatch(travelOneMonth({
            plusOrMinus
        }));
    }
    return (
        <div id="time_travel_btns" className={"flex text-gray-500"}>
            <div id='prev_month_btn' className={"hover:cursor-pointer flex hover:font-bold hover:text-black"}
                onClick={() => { onTravelOneMonth(-1) }}
            >
                {'<<  '}
            </div>
            <div id='displayed_year_month' className={"flex"}>
                {`  ${outfitDate.pickedOutfitDate.year} / ${outfitDate.pickedOutfitDate.month}  `}
            </div>
            <div id='next_month_btn' className={"hover:cursor-pointer flex hover:font-bold hover:text-black"}
                onClick={() => { onTravelOneMonth(1) }}
            >
                {'  >>'}
            </div>
        </div>
    )
}