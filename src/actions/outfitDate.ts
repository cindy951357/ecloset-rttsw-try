import {
    SET_PICKED_OUTFIT_DATE,
    TRAVEL_ONE_MONTH,
} from './actionTypes';

export const setPickedOutfitDate = payload => ({
    type: SET_PICKED_OUTFIT_DATE,
    payload,
});

export const travelOneMonth = payload => ({
    type: TRAVEL_ONE_MONTH,
    payload,
});