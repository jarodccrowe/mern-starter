import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import classNames from 'classnames';

// Import Style
import styles from './OrderCreateWidget.css';

export class OrderCreateWidget extends Component {
  addOrder = () => {
    const customerNameRef = this.refs.customerName;
    const deliveryDate = this.refs.deliveryDate;
    const pickupDate = this.refs.pickupDate;
    const address = this.refs.address;
    const invoiceUseDays = this.refs.invoiceUseDays;
    const comments = this.refs.comments;


    if (
      customerNameRef.value &&
      deliveryDate.value &&
      pickupDate.value &&
      address.value &&
      invoiceUseDays.value &&
      comments.value
    ) {
      this.props.addOrder(
        customerNameRef.value,
        deliveryDate.value,
        pickupDate.value,
        address.value,
        invoiceUseDays.value,
        comments.value,
      );
      customerNameRef.value = address.value = comments.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddOrder ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewOrder" /></h2>
          <label>Select Glasses</label>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <button type="button" className="btn btn-secondary">
              <img src="https://www.plumm.com/globalassets/productassets/pluh3310a/plumm-large/pluh3310a_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
            <button type="button" className="btn btn-secondary">
              <img src="https://www.plumm.com/globalassets/productassets/pluh3310b/plumm-large/pluh3310b_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
            <button type="button" className="btn btn-secondary">
              <img src="https://www.plumm.com/globalassets/productassets/pluo6660rw/plumm-large/pluo6660rw_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
          </div>
          <label>{this.props.intl.messages.deliveryDate}</label>
          <input type="date" className={styles['form-field']} ref="deliveryDate" />
          <label>{this.props.intl.messages.pickupDate}</label>
          <input type="date" className={styles['form-field']} ref="pickupDate" />
          <label>Availability</label>
          <p>The following amounts of the glass selected are available:</p>
          <div className="card" style={{ padding: '1rem', marginBottom: '1rem' }}>
            something
          </div>
          <label>Customer Name</label>
          <input className={styles['form-field']} ref="customerName" />
          <label>Address</label>
          <input className={styles['form-field']} ref="address" />
          <label>{this.props.intl.messages.useDays}</label>
          <input type="number" className={styles['form-field']} ref="invoiceUseDays" />
          <label>{this.props.intl.messages.additionalComments}</label>
          <textarea placeholder={this.props.intl.messages.comments} className={styles['form-field']} ref="comments" />
          <a className={styles['order-submit-button']} href="#" onClick={this.addOrder}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

OrderCreateWidget.propTypes = {
  addOrder: PropTypes.func.isRequired,
  showAddOrder: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(OrderCreateWidget);
