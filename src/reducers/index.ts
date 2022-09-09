import { combineReducers } from 'redux';

import popupReducer from './popup';
import zoomInReducer from './zoomedInArea';
import outfiitDateReducer from './outfitDate';
import pickedClothItemReducer from './pickedClothItems';
import puzzleReducer from './puzzles';

export default combineReducers({
    popupReducer,
    zoomInReducer,
    outfiitDateReducer,
    pickedClothItemReducer,
    puzzleReducer,
});