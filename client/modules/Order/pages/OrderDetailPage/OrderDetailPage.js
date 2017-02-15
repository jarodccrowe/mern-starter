import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/OrderListItem/OrderListItem.css';

// Import Actions
import { fetchOrder } from '../../OrderActions';

// Import Selectors
import { getOrder } from '../../OrderReducer';

export function OrderDetailPage(props) {
  return (
    <div>
      <Helmet title={props.order.title} />
      <div className={`${styles['single-order']} ${styles['order-detail']}`}>
        <h3 className={styles['order-title']}>{props.order.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" />{props.order.name}</p>
        <p className={styles['order-desc']}>{props.order.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
OrderDetailPage.need = [params => {
  return fetchOrder(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    order: getOrder(state, props.params.cuid),
  };
}

OrderDetailPage.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(OrderDetailPage);
