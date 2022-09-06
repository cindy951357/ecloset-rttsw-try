import {
    SET_PICKED_OUTFIT_DATE,
} from '../actions/actionTypes';
import moment from 'moment';
import { defaultOutfitDatesTupleArr } from '../mockData/mockOutfitDate';
interface Props {
    /**(date, outfitID) */
    outfitDateTupleArr: Array<Array<[string, string]>>,
    pickedOutfitDate: {
        outfitID: number,
        date: string,
    }
}
const init: Props = {
    outfitDateTupleArr: defaultOutfitDatesTupleArr,
    pickedOutfitDate: {
        outfitID: -1,
        date: '2022-08-24',
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
        default: return state;
    }
};

export const outfiitDateSelector = ({ outfiitDateReducer }) => outfiitDateReducer;