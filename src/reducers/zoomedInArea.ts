import {
    SET_ZOOMIN_CONTENT,
} from '../actions/actionTypes';

const init = {
    viewMode: 'SIMPLE_MODE',
    clothFileNames: ['', '', '', ''],
};

export default function zoomInReducer(state = init, action) {
    switch (action.type) {
        case SET_ZOOMIN_CONTENT:
            return {
                ...state,
                clothFileNames: action.payload.clothFileNames,
                viewMode: action.payload.viewMode
            };
        default: return state;
    }
};

export const zoomInSelector = ({ zoomInReducer }) => zoomInReducer;