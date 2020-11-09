import React from "react";
import { Form } from "react-bootstrap";

export const Input = ({
  className,
  label = "This is label element",
  size,
  type,
  placeholder,
  onchange = () => {},
  onblur = () => {},
  name,
  value,
  ref
}) => {
  return (
    <>
      <Form.Group {...(!!className ? { className } : "")}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          size={size}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => onchange(e)}
          onBlur={() => onblur()}
          ref={ref}
        />
      </Form.Group>
    </>
  );
};
