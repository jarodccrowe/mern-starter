import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import OrderList from '../../components/OrderList';
import OrderCreateWidget from '../../components/OrderCreateWidget/OrderCreateWidget';

// Import Actions
import { addOrderRequest, fetchOrders, deleteOrderRequest } from '../../OrderActions';
import { toggleAddOrder } from '../../../App/AppActions';

// Import Selectors
import { getShowAddOrder } from '../../../App/AppReducer';
import { getOrders } from '../../OrderReducer';

class OrderListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchOrders());
  }

  handleDeleteOrder = order => {
    if (confirm('Do you want to delete this order')) { // eslint-disable-line
      this.props.dispatch(deleteOrderRequest(order));
    }
  };

  handleAddOrder = (name, title, content) => {
    this.props.dispatch(toggleAddOrder());
    this.props.dispatch(addOrderRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <OrderCreateWidget addOrder={this.handleAddOrder} showAddOrder={this.props.showAddOrder} />
        <OrderList handleDeleteOrder={this.handleDeleteOrder} orders={this.props.orders} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
OrderListPage.need = [() => { return fetchOrders(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddOrder: getShowAddOrder(state),
    orders: getOrders(state),
  };
}

OrderListPage.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddOrder: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

OrderListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(OrderListPage);
