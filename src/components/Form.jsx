import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI, fetchExchange } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      // method: 'Dinheiro',
      // tag: 'Alimentação',
    };
    // this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { getCurrencies, getExchange } = this.props;
    getCurrencies();
    getExchange();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // updateState() {
  //   this.setState({
  // id: 0,
  //     value: 0,
  //     description: '',
  //     currency: 'USD',
  // method: 'Dinheiro',
  // tag: 'Alimentação',
  //   });
  // }

  render() {
    const { currencies } = this.props;
    const { value, description, currency } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>

        <label name="Moeda" htmlFor="Moeda">
          Moeda:
          <select
            id="Moeda"
            data-testid="currency-input"
            name="currency"
            value={ currency }
            aria-label="Moeda"
            onChange={ this.handleChange }
          >
            {currencies.map((curr, index) => (
              <option key={ index } value={ curr }>
                { curr }
              </option>))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="method"
            onChange={ this.handleChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.updateState }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  getExchange: () => dispatch(fetchExchange()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  getCurrencies: propTypes.func.isRequired,
  getExchange: propTypes.func.isRequired,
};
