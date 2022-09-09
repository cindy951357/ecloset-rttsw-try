import {
    INSERT_PUZZLE,
} from './actionTypes';

export const insertPuzzle = payload => ({
    type: INSERT_PUZZLE,
    payload,
});