import {
    ADD_STYLE_TAG,
} from '../actions/actionTypes';
import { mockTags } from '../mockData/mockTags';


const init = [...mockTags];

export default function styleTagReducer(state = init, action) {
    switch (action.type) {
        case ADD_STYLE_TAG:
            const { tagName } = action.payload;
            const newId: number = state.length;
            return [
                ...state,
                {
                    id: newId,
                    tagName: tagName
                }
            ];
        default:
            return state;
    }
}

export const styleTagSelector = ({ styleTagReducer }) => (styleTagReducer);