import { combineReducers } from 'redux';

import popupReducer from './popup';
import zoomInReducer from './zoomedInArea';

export default combineReducers({
    popupReducer,
    zoomInReducer,
});