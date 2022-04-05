import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expensesTotal } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{expensesTotal || 0}</span>
        <span data-testid="header-currency-field"> Câmbio: BRL </span>
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
