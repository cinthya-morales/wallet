import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <Header />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  getCurrencies: propTypes.func.isRequired,
};
