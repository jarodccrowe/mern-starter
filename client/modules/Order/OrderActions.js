import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDERS = 'ADD_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';

// Export Actions
export function addOrder(order) {
  return {
    type: ADD_ORDER,
    order,
  };
}

export function addOrderRequest(order) {
  return (dispatch) => {
    return callApi('orders', 'post', {
      order: {
        name: order.name,
        title: order.title,
        content: order.content,
      },
    }).then(res => dispatch(addOrder(res.order)));
  };
}

export function addOrders(orders) {
  return {
    type: ADD_ORDERS,
    orders,
  };
}

export function fetchOrders() {
  return (dispatch) => {
    return callApi('orders').then(res => {
      dispatch(addOrders(res.orders));
    });
  };
}

export function fetchOrder(cuid) {
  return (dispatch) => {
    return callApi(`orders/${cuid}`).then(res => dispatch(addOrder(res.order)));
  };
}

export function deleteOrder(cuid) {
  return {
    type: DELETE_ORDER,
    cuid,
  };
}

export function deleteOrderRequest(cuid) {
  return (dispatch) => {
    return callApi(`orders/${cuid}`, 'delete').then(() => dispatch(deleteOrder(cuid)));
  };
}
