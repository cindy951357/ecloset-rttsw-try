import {
    DELETE_PICKED_CLOTH_ITEMS,
    INSERT_PICKED_CLOTH_ITEMS,
} from './actionTypes';

export const insertPickedClothItems = payload => ({
    type: INSERT_PICKED_CLOTH_ITEMS,
    payload,
});

export const deletePickedClothItems = payload => ({
    type: DELETE_PICKED_CLOTH_ITEMS,
    payload,
});