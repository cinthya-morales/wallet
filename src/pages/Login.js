import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { setUser } from '../actions';
import { Button, Input, Form, GlobalStyle, Wrapper, Title, H2 } from '../styles';

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
    const check = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; // https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469
    if (check.test(email) === true && senha.length >= min) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }

  render() {
    const { disabledButton, email, senha } = this.state;
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Form>
            <Title>Trybe Wallet</Title>
            <H2>Login</H2>
            <Input
              placeholder="Email"
              data-testid="email-input"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />

            <Input
              placeholder="Senha"
              data-testid="password-input"
              type="password"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
            />

            <Link to="/carteira">
              <Button
                data-testid="login-submit-button"
                disabled={ disabledButton }
              >
                Entrar
              </Button>
            </Link>

          </Form>
        </Wrapper>
      </>
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
