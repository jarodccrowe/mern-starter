import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './OrderListItem.css';

function OrderListItem(props) {
  return (
    <div className={styles['single-order']}>
      <h3 className={styles['order-title']}>
        <Link to={`/orders/${props.order.slug}-${props.order.cuid}`} >
          {props.order.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.order.name}</p>
      <p className={styles['order-desc']}>{props.order.content}</p>
      <p className={styles['order-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deleteOrder" /></a></p>
      <hr className={styles.divider} />
    </div>
  );
}

OrderListItem.propTypes = {
  order: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default OrderListItem;
