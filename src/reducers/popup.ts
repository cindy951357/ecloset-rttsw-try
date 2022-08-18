import {
    SET_POPUP_SHOW,
} from '../actions/actionTypes';

import { Props as outfitItemProps } from '../components/OutfitItem/OutfitItem';

interface Props {
    isShow: Boolean,
    content: {
        outfitItem: outfitItemProps | null,
    },
}

const init = {
    isShow: false,
    content: {
        outfitItem: null,
    },
};

export default function popupReducer(state = init, action) {
    switch (action.type) {
        case SET_POPUP_SHOW:
            return {
                ...state,
                isShow: action.payload.isShow,
                content: action.payload.content,
            };
        default: return state;
    }
};

export const popupShowSelector = ({ popupReducer }) => popupReducer;
