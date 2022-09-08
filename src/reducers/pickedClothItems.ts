import {
    INSERT_PICKED_CLOTH_ITEMS,
    DELETE_PICKED_CLOTH_ITEMS,
} from "../actions/actionTypes";

const init = [
    /** put cloth ID here */
]

const pickedClothItemReducer = (state = init, action) => {
    switch (action.type) {
        case INSERT_PICKED_CLOTH_ITEMS: {
            return [
                ...state,
                action.payload
            ];
        };
        case DELETE_PICKED_CLOTH_ITEMS: {
            const newState = state;
            return newState.filter(id => id !== action.payload);
        };
        default: return state;
    }
};

export default pickedClothItemReducer;

export const pickedClothItemSelector =
    ({ pickedClothItemReducer }) => pickedClothItemReducer;