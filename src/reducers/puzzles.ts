import {
    INSERT_PUZZLE,
} from "../actions/actionTypes";

import { mockOutfits } from './../mockData/mockOutfit';

const init = [...mockOutfits];

const puzzleReducer = (state = init, action) => {
    switch (action.type) {
        case INSERT_PUZZLE: {
            return [
                ...state,
                action.payload
            ];
        };
        default: return state;
    }
};

export default puzzleReducer;

export const puzzleSelector =
    ({ puzzleReducer }) => puzzleReducer;