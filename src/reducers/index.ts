import { combineReducers } from 'redux';

import popupReducer from './popup';
import zoomInReducer from './zoomedInArea';
import outfiitDateReducer from './outfitDate';

export default combineReducers({
    popupReducer,
    zoomInReducer,
    outfiitDateReducer,
});