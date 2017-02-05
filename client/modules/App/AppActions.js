// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

export const TOGGLE_ADD_ORDER = 'TOGGLE_ADD_ORDER';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddOrder() {
  return {
    type: TOGGLE_ADD_ORDER,
  };
}
