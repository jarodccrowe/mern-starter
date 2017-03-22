import { ADD_GLASS_TYPES } from './GlasswareActions';

// Initial State
const initialState = { data: [] };

const GlassWareReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_GLASS_TYPES :
      return {
        data: action.glassTypes,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all glass types
export const getGlassTypes = state => state.glassTypes.data;

// Export Reducer
export default GlassWareReducer;
