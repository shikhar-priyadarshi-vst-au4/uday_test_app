import React from "react";
import { Button } from "react-bootstrap";

export const KeyStroke = ({
  className,
  children,
  variant = "primary",
  size = "",
  onclick = () => {},
  type = "button",
  active,
  disabled,
  block
}) => {
  return (
    <>
      <Button
        type={type}
        size={size}
        variant={variant}
        onClick={() => onclick()}
        {...(!!className ? { className } : "")}
        {...(!!block ? { block } : "")}
        {...(!!active ? { active } : "")}
        {...(!!disabled ? { disabled } : "")}
      >
        {children}
      </Button>
    </>
  );
};
