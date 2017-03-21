import { ADD_GLASS_TYPES } from './GlasswareActions';

// Initial State
const initialState = { data: [] };

const GlassWareReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_GLASS_TYPES :
      return {
        data: action.glasstypes,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all glass types
export const getGlassTypes = state => state.glasstypes.data;

// Export Reducer
export default GlassWareReducer;
