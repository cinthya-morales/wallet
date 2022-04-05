import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Header';
import { fetchAPI, saveState } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const { updateState } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    updateState({
      ...this.state,
      exchangeRates,
    });
    console.log('oioi');
    console.log(this.state);
    this.setState({
      id: id + 1,
      value: 0,
      description: 'besteira',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { currencies } = this.props;
    // console.log(expenses);
    const { value, description, currency, method } = this.state;
    return (
      <div>
        <Header />
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

          <label htmlFor="method-inputs">
            Método de pagamento:
            <select
              data-testid="method-input"
              id="method-inputs"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="category-input">
            Categoria:
            <select
              id="category-input"
              data-testid="tag-input"
              name="tag"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
  updateState: (state) => dispatch(saveState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  getCurrencies: propTypes.func.isRequired,
  updateState: propTypes.func.isRequired,
  // expenses: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};
