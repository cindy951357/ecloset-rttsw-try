import {
    ADD_STYLE_TAG,
} from './actionTypes';

export const addStyleTag = payload => ({
    type: ADD_STYLE_TAG,
    payload,
    /** id is not included in payload */
});