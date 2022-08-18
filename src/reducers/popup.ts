import {
    SET_POPUP_SHOW,
} from '../actions/actionTypes';

const init = {
    isShow: false,
};

export default function popupReducer(state = init, action) {
    switch (action.type) {
        case SET_POPUP_SHOW:
            return {
                ...state,
                isShow: action.payload
            };
        default: return state;
    }
};

export const popupShowSelector = ({ popupReducer }) => popupReducer;
