import React from 'react';

import Form from "react-bootstrap/Form";

import './PasswordField.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export default function PasswordField(props) {

  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Form.Group className="password-field">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control 
        name={props.name}
        id={props.name}
        type={passwordShown ? "text" : "password"}
        value={props.value} 
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eyeSlash}</i>
      {props.error && (
        <div className="input-error">{props.error}</div>
      )}
    </Form.Group>
  );
}