import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses
      .map(
        ({ currency, value, exchangeRates }) => (
          (Number(value) * Number(exchangeRates[currency].ask))),
      )
      .reduce(
        (prev, curr) => prev + curr, 0,
      ).toFixed(2);
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          { expenses ? `Total: ${total} ` : 0 }
        </span>
        <span data-testid="header-currency-field"> Câmbio: BRL </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
