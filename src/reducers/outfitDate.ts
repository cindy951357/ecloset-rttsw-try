import {
    SET_PICKED_OUTFIT_DATE,
} from '../actions/actionTypes';

const init = {
    outfitID: -1,
    date: '2022-08-24',
};

export default function outfiitDateReducer(state = init, action) {
    switch (action.type) {
        case SET_PICKED_OUTFIT_DATE:
            return {
                ...state,
                outfitID: action.payload.outfitID,
                date: action.payload.date
            };
        default: return state;
    }
};

export const outfiitDateSelector = ({ outfiitDateReducer }) => outfiitDateReducer;