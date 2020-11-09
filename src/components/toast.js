import React from "react";
import { Toast } from "react-bootstrap";

export const Notifier = ({
  show = false,
  setShow = () => {},
  head = "Toast head message",
  body = "Toast body message"
}) => {
  const toggler = () => setShow(!show);
  return (
    <>
      <Toast
        show={show}
        onClose={toggler}
        delay={500}
        className={"m-4 fixed-top bg-success text-white"}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">{head}</strong>
        </Toast.Header>
        <Toast.Body className={"font-bold"}>{body}</Toast.Body>
      </Toast>
    </>
  );
};
