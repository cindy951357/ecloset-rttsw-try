import {
    SET_PICKED_OUTFIT_DATE,
    TRAVEL_ONE_MONTH,
} from '../actions/actionTypes';
import moment from 'moment';
import { defaultOutfitDatesTupleArr, generateMockOutfitDateTuplesArr } from '../mockData/mockOutfitDate';

const now = new Date();
const yyyy = now.getFullYear();
const MM = now.getMonth() + 1;
const dd = now.getDate();

interface Props {
    /**(date, outfitID) */
    outfitDateTupleArr: Array<Array<[string, string]>>,
    pickedOutfitDate: {
        outfitID: number,
        date: string,
        year: number,
        month: number,
        dd: number,
    }
}
const init: Props = {
    outfitDateTupleArr: defaultOutfitDatesTupleArr,
    pickedOutfitDate: {
        outfitID: -1,
        date: `${yyyy}-${MM}-${dd}`,
        year: yyyy,
        month: MM,
        dd: dd,
    }
};

export default function outfiitDateReducer(state = init, action) {
    switch (action.type) {
        case SET_PICKED_OUTFIT_DATE:
            const oldOutfitDate = state.outfitDateTupleArr;
            let newOutfitDate = oldOutfitDate;
            newOutfitDate.map(elem => {
                if (moment(elem[0]).isSame(action.payload.date)) {
                    console.log('reducer found', elem[0], '\n action.payload.outfitID', action.payload.outfitID);
                    elem[1] = action.payload.outfitID;
                }
            })
            return {
                pickedOutfitDate: action.payload,
                outfitDateTupleArr: newOutfitDate,
            };
        case TRAVEL_ONE_MONTH:
            const {
                plusOrMinus, // 1 or -1
            } = action.payload

            const traveledDateTime: Date = new Date(`${state.pickedOutfitDate.year}-${state.pickedOutfitDate.month}-${state.pickedOutfitDate.dd}`);
            traveledDateTime.setMonth(traveledDateTime.getMonth() + plusOrMinus);

            return {
                ...state,
                pickedOutfitDate: {
                    ...state.pickedOutfitDate,
                    date: `${traveledDateTime.getFullYear()}-${traveledDateTime.getMonth() + 1}-${traveledDateTime.getDate()}`,
                    year: traveledDateTime.getFullYear(),
                    month: traveledDateTime.getMonth() + 1,
                    dd: traveledDateTime.getDate(),
                },
                outfitDateTupleArr: generateMockOutfitDateTuplesArr(traveledDateTime.getFullYear, traveledDateTime.getMonth() + 1),
            };
        default: return state;
    }
};

export const outfiitDateSelector = ({ outfiitDateReducer }) => outfiitDateReducer;