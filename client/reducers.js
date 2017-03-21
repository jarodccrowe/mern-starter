/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import glasstypes from './modules/Glassware/GlasswareReducer';
import orders from './modules/Order/OrderReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  glasstypes,
  orders,
  intl,
});
