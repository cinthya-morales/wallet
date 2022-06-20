import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expensesTotal } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">
          Despesa:
          {' '}
          { expensesTotal || 0}
        </div>
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
