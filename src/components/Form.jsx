import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI, saveState, totalExpenses } from '../actions';

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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const { updateState, getTotalExpense } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    updateState({
      ...this.state,
      exchangeRates,
    });
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }, () => getTotalExpense());
  }

  render() {
    const { currencies, expenses } = this.props;
    const { value, description, currency, method } = this.state;
    return (
      <div>

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

        <table>
          <thead>
            <style>{'table, th{border:1px solid black;}'}</style>
            <tr>
              <th>Descrição </th>
              <th>Tag </th>
              <th>Método de pagamento </th>
              <th>Valor </th>
              <th>Moeda</th>
              <th>Câmbio utilizado </th>
              <th>Valor convertido </th>
              <th>Moeda de conversão </th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>

          <tbody>
            {expenses
          && expenses
            .map((item) => (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{Number(item.value).toFixed(2)}</td>
                <td>{item.exchangeRates[item.currency].name}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Editar</button>
                  <button type="button" data-testid="delete-btn">Excluir</button>
                </td>
              </tr>))}
          </tbody>
        </table>
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
  getTotalExpense: () => dispatch(totalExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: propTypes.arrayOf({}).isRequired,
  getCurrencies: propTypes.func.isRequired,
  updateState: propTypes.func.isRequired,
  getTotalExpense: propTypes.func.isRequired,
  expenses: propTypes.arrayOf({}).isRequired,
};
