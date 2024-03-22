import {
    INSERT_PICKED_CLOTH_ITEMS,
    DELETE_PICKED_CLOTH_ITEMS,
    CLEAR_PICKED_CLOTH_ITEMS,
} from "../actions/actionTypes";

const init = [
    /** put cloth here */
];

const pickedClothItemReducer = (state = init, action) => {
    switch (action.type) {
        case INSERT_PICKED_CLOTH_ITEMS: {
            const cltohToOperate = action.payload;
            return [
                ...state,
                cltohToOperate
            ];
        };
        case DELETE_PICKED_CLOTH_ITEMS: {
            const newState = [...state];
            return newState.filter(elem => elem.id !== action.payload.id);
        };
        case CLEAR_PICKED_CLOTH_ITEMS: {
            return [];
        }
        default: return state;
    }
};

export default pickedClothItemReducer;

export const pickedClothItemSelector =
    ({ pickedClothItemReducer }) => pickedClothItemReducer;