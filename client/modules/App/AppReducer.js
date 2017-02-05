// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_ORDER } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showAddOrder: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    case TOGGLE_ADD_ORDER:
      return {
        showAddOrder: !state.showAddOrder,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showAddOrder
export const getShowAddOrder = state => state.app.showAddOrder;

// Export Reducer
export default AppReducer;
