import React from 'react';

import Form from "react-bootstrap/Form";

export default function InputField(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control 
        name={props.name}
        id={props.name}
        type="text" 
        value={props.value} 
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.error && (
        <div className="input-error">{props.error}</div>
      )}
    </Form.Group>
  );
}