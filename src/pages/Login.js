import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { setUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      disabledButton: true,
    };

    this.validationUser = this.validationUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { login } = this.props;
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.validationUser());
    login({ [name]: value });
  }

  validationUser() {
    const { email, senha } = this.state;
    const min = 6;
    const check = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (check.test(email) === false && senha.length < min) {
      this.setState({ disabledButton: true });
    } else if (check.test(email) === true && senha.length >= min) {
      this.setState({ disabledButton: false });
    }
  }

  render() {
    const { disabledButton, email, senha } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            placeholder="Email"
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          <input
            placeholder="Senha"
            data-testid="password-input"
            type="text"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <input
            data-testid="login-submit-button"
            type="button"
            value="Entrar"
            disabled={ disabledButton }
          />
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(setUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  login: propTypes.func.isRequired,
};
