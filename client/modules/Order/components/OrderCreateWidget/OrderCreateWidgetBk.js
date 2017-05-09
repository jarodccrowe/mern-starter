import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './OrderCreateWidget.css';

export class OrderCreateWidget extends Component {
  constructor() {
    super();

    this.state = {
      selectedGlassTypes: [],
    };
  }

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

  renderGlassType(glass) {
    const onClick = () => {
      const newState = this.state.selectedGlassTypes.slice();
      newState.push(glass);
      this.setState({ newState });
    };

    return (
      <button type="button" className="btn" onClick={onClick}>
        <p><small>{glass.name}</small></p>
        <img src={glass.src} width="160" alt="glass1" />
      </button>
    );
  }

  render() {
    console.log(this.props);
    const cls = `${styles.form} ${(this.props.showAddOrder ? styles.appear : '')}`;

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewOrder" /></h2>
          <label>Select Glasses</label>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            {this.props.glassTypes && this.props.glassTypes.map(this.renderGlassType)}
          </div>
          <label>{this.props.intl.messages.deliveryDate}</label>
          <input type="date" className={styles['form-field']} ref="deliveryDate" />
          <label>{this.props.intl.messages.pickupDate}</label>
          <input type="date" className={styles['form-field']} ref="pickupDate" />
          <label>Availability</label>
          <p><small>The following amounts of seleted glasses are available:</small></p>
          <div className="card text-primary" style={{ padding: '1rem 1rem 0.3rem 1rem', marginBottom: '1rem' }}>
          </div>
          <div className="row mx-0 px-0">
            <div className="col-md-12 mx-0 px-0">
              <label>Select the amounts you would like to hire:</label>
            </div>
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
  glassTypes: PropTypes.array.isRequired,
};

export default injectIntl(OrderCreateWidget);
