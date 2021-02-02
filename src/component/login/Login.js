import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Form, Button, Row, Col } from '../../../node_modules/react-bootstrap'

import InputField from '../../container/inputField/InputField';
import PasswordField from '../../container/passwordField/PasswordField'
import { emailFieldValidation, passwordFieldValidation } from "../../utils";

import './Login.css'

function Login(props) {
  const [state, setState] = React.useState({ email: '', password: '', errors: { email: "", password: "" } });

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleFocus = event => {
    const { name, value } = event.target;
    let { errors } = state;
    errors[name] = "";
    setState({ ...state, errors });
  };

  const handleBlur = event => {
    const { name, value } = event.target;
    let { errors } = state;

    if (name === 'email') {
      errors = emailFieldValidation(value, errors);
    }
    if (name === 'password') {
      errors = passwordFieldValidation(value, errors);
    }

    setState({ ...state, errors });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { email, password, errors } = state;

    errors = emailFieldValidation(email, errors);
    errors = passwordFieldValidation(password, errors);

    setState({ ...state, errors });

    if (!errors.email && !errors.password) {
      localStorage.setItem("logged_in", 'true');
      props.history.push('/');
    }
  };

  return (
    <div className="login">
      <Container>
        <Row className="">
          <Col xs sm="6" lg="5">
            <Form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                name="email"
                type='email'
                value={state.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                error={state.errors.email}
              />
              <PasswordField
                label="Password"
                name="password"
                value={state.password}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                error={state.errors.password}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Login);