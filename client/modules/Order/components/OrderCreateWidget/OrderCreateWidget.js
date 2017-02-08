import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './OrderCreateWidget.css';

export class OrderCreateWidget extends Component {
  addOrder = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addOrder(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddOrder ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewOrder" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.orderTitle} className={styles['form-field']} ref="title" />
          <textarea placeholder={this.props.intl.messages.orderContent} className={styles['form-field']} ref="content" />
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
