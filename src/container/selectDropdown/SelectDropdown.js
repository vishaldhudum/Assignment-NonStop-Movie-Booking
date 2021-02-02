import React from 'react';

import { Form } from '../../../node_modules/react-bootstrap'

export default function SelectDropdown(props) {
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control
        as="select"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        <option
          key="default"
          value="0"
        >
          Select
        </option>
        {
          props.options.map((option) => {
            return (
              <option
                key={option.id}
                value={option.id}
              >
                {option.title}
              </option>
            )
          })
        }
      </Form.Control>
    </Form.Group>
  );
}