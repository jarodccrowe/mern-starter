import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_GLASS_TYPES = 'ADD_GLASS_TYPES';

// Export Actions
export function addGlassTypes(glassTypes) {
  return {
    type: ADD_GLASS_TYPES,
    glassTypes,
  };
}

export function fetchGlassTypes() {
  return (dispatch) => {
    return callApi('glasstypes').then(res => {
      dispatch(addGlassTypes(res.glassTypes));
    });
  };
}
