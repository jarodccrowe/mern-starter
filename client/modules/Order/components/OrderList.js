import React, { PropTypes } from 'react';

// Import Components
import OrderListItem from './OrderListItem/OrderListItem';

function OrderList(props) {
  return (
    <div className="listView">
      {
        props.order.map(order => (
          <OrderListItem
            order={order}
            key={order.cuid}
            onDelete={() => props.handleDeleteOrder(order.cuid)}
          />
        ))
      }
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteOrder: PropTypes.func.isRequired,
};

export default OrderList;
