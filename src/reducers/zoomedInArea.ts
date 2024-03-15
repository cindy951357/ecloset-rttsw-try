import {
    SET_ZOOMIN_CONTENT,
} from '../actions/actionTypes';

const init = {
    viewMode: 'SIMPLE_MODE',
    clothIDs: [1, 2, 3, 4],
    tags: [1, 2, 3],
};

export default function zoomInReducer(state = init, action) {
    switch (action.type) {
        case SET_ZOOMIN_CONTENT:
            return {
                clothIDs: action.payload.clothIDs,
                viewMode: action.payload.viewMode,
                tags: action.payload.tags,
            };
        default: return state;
    }
};

export const zoomInSelector = ({ zoomInReducer }) => zoomInReducer;