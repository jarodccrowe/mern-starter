import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import classNames from 'classnames';

// Import Style
import styles from './OrderCreateWidget.css';

export class OrderCreateWidget extends Component {
  constructor() {
    super();

    this.state = {
      glass1: false,
      glass2: false,
      glass3: false,
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

  render() {
    const cls = `${styles.form} ${(this.props.showAddOrder ? styles.appear : '')}`;


    const { glass1, glass2, glass3 } = this.state;
    const { deliveryDate, pickupDate } = this.refs;

    const addGlass1 = () => {
      this.setState({ glass1: !this.state.glass1 });
    };
    const addGlass2 = () => {
      this.setState({ glass2: !this.state.glass2 });
    };
    const addGlass3 = () => {
      this.setState({ glass3: !this.state.glass3 });
    };

    const showGlass1 = this.state.glass1 === true;
    const showGlass2 = this.state.glass2 === true;
    const showGlass3 = this.state.glass3 === true;

    console.log(this.refs);

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewOrder" /></h2>
          <label>Select Glasses</label>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <button type="button" className={classNames('btn', { 'btn-primary': this.state.glass1 })} onClick={addGlass1}>
              <img src="https://www.plumm.com/globalassets/productassets/pluh3310a/plumm-large/pluh3310a_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
            <button type="button" className={classNames('btn', { 'btn-primary': this.state.glass2 })} onClick={addGlass2}>
              <img src="https://www.plumm.com/globalassets/productassets/pluh3310b/plumm-large/pluh3310b_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
            <button type="button" className={classNames('btn', { 'btn-primary': this.state.glass3 })} onClick={addGlass3}>
              <img src="https://www.plumm.com/globalassets/productassets/pluo6660rw/plumm-large/pluo6660rw_3_plumm-large.jpg" width="160" alt="glass1" />
            </button>
          </div>
          <label>{this.props.intl.messages.deliveryDate}</label>
          <input type="date" className={styles['form-field']} ref="deliveryDate" />
          <label>{this.props.intl.messages.pickupDate}</label>
          <input type="date" className={styles['form-field']} ref="pickupDate" />
          <label>Availability</label>
          <p><small>The following amounts of seleted glasses are available:</small></p>
          <div className="card text-primary" style={{ padding: '1rem 1rem 0.3rem 1rem', marginBottom: '1rem' }}>
            {glass1 === false && glass2 === false && glass3 === false && <p className="text-muted">No Glass Types Selected</p>}
            {pickupDate && pickupDate.value === '' && <p className="text-muted">No Dates Selected</p>}
            {pickupDate && pickupDate.value !== '' &&
              <div>
                {showGlass1 && <p>Glass 1: {Math.floor(Math.random() * 900 + 10)}</p>}
                {showGlass2 && <p>Glass 2: {Math.floor(Math.random() * 900 + 10)}</p>}
                {showGlass3 && <p>Glass 3: {Math.floor(Math.random() * 900 + 10)}</p>}
              </div>
            }
          </div>
          <div className="row mx-0 px-0">
            <div className="col-md-12 mx-0 px-0">
              <label>Select the amounts you would like to hire:</label>
            </div>
            {showGlass1 &&
              <div className="col-md-4 pl-0">
                <label><small>Glass 1</small></label>
                <input type="number" className={styles['form-field']} ref="glass1" />
              </div>
            }
            {showGlass2 &&
              <div className="col-md-4 px-0">
                <label><small>Glass 2</small></label>
                <input type="number" className={styles['form-field']} ref="glass2" />
              </div>
            }
            {showGlass3 &&
              <div className="col-md-4 pr-0">
                <label><small>Glass 3</small></label>
                <input type="number" className={styles['form-field']} ref="glass3" />
              </div>
            }
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
        <div className="card p-3" style={{ position: 'fixed', top: '250px', background: 'light-grey', height: '100px', width: '130px' }}>Discount: {Math.floor(Math.random() * 10)}%</div>
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
