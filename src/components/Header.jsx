import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HeaderW, MoneyIcon } from '../styles/walletStyles';

class Header extends React.Component {
  render() {
    const { email, expensesTotal } = this.props;
    return (
      <header>
        <MoneyIcon />
        <HeaderW data-testid="email-field">{ email }</HeaderW>
        <HeaderW data-testid="total-field">
          Despesa:
          {' '}
          { expensesTotal || 0}
        </HeaderW>
        <HeaderW data-testid="header-currency-field"> Câmbio: BRL </HeaderW>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesTotal: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expensesTotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
