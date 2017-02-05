import { ADD_ORDER, ADD_ORDERS, DELETE_ORDER } from './OrderActions';

// Initial State
const initialState = { data: [] };

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER :
      return {
        data: [action.order, ...state.data],
      };

    case ADD_ORDERS :
      return {
        data: action.orders,
      };

    case DELETE_ORDER :
      return {
        data: state.data.filter(order => order.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all orders
export const getOrders = state => state.orders.data;

// Get order by cuid
export const getOrder = (state, cuid) => state.orders.data.filter(order => order.cuid === cuid)[0];

// Export Reducer
export default OrderReducer;
