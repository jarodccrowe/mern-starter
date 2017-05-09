import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './OrderCreateWidget.css';

export class OrderCreateWidget extends Component {
  constructor() {
    super();

    this.state = {
      selectedGlasses: [],
    };
  }

  addOrder = () => {
    const customerNameRef = this.refs.customerName;
    const deliveryDate = this.refs.deliveryDate;
    const pickupDate = this.refs.pickupDate;
    const glasses = this.refs.glasses;

    if (
      customerNameRef.value &&
      deliveryDate.value &&
      pickupDate.value &&
      glasses.value
    ) {
      this.props.addOrder(
        customerNameRef.value,
        deliveryDate.value,
        pickupDate.value,
        glasses.value,
      );
      customerNameRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddOrder ? styles.appear : '')}`;

    const selectGlasses = () => {
      this.setState({ selectedGlasses: [1, 2, 3, 4] });
    };

    const sendDates = () => {
      const payload = {
        glasses: [1, 2, 3, 4],
        date1: 1,
        date2: 2,
      };

      this.props.checkOrder(payload);
    };

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>
            <FormattedMessage id="createNewOrder" />
          </h2>
          <label>Select Glasses</label>
          <button onClick={selectGlasses}>Select Glasses</button>
          <label>{this.props.intl.messages.deliveryDate}</label>
          <input type="date" className={styles['form-field']} ref="deliveryDate" />
          <label>{this.props.intl.messages.pickupDate}</label>
          <input type="date" className={styles['form-field']} ref="pickupDate" />
          <button onClick={sendDates}>Send Dates</button>
          <label>Availability</label>
        </div>
      </div>
    );
  }
}

OrderCreateWidget.propTypes = {
  addOrder: PropTypes.func.isRequired,
  checkOrder: PropTypes.func.isRequired,
  showAddOrder: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  glassTypes: PropTypes.array.isRequired,
};

export default injectIntl(OrderCreateWidget);
