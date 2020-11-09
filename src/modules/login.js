import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Input } from "../components/input";
import { KeyStroke } from "../components/button";
import { Notifier } from "../components/toast";
import { Loader } from "../components/loader";

const actionFn = () => {
  setTimeout(() => {
    window.location.href = "/main";
  }, 800);
};

const useLocalStorage = (auth) => {
  const status = localStorage.getItem("auth-status");
  React.useEffect(() => {
    if (status) {
      actionFn();
    } else if (auth) {
      localStorage.setItem("auth-status", auth);
      actionFn();
    }
  }, [auth]);
  return [status];
};

export const Login = (props) => {
  const [auth, setAuth] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({
    username: "",
    password: ""
  });
  const [status] = useLocalStorage(auth);
  const checkCreditenials = () => {
    if (data.username === "officialsearch" && data.password === "search123") {
      setShow(true);
      setTimeout(() => {
        setAuth(true);
      }, 500);
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (status) {
    return <Loader />;
  }
  return (
    <>
      <Notifier
        setShow={setShow}
        show={show}
        head={"Message"}
        body={"You're successfully logged in"}
      />
      <Container className="vh-100">
        <Row className="h-100">
          <Col sm={8} md={6} lg={4} className="mx-auto">
            <Form className="border p-4 my-5 border-secondary rounded-lg">
              <Input
                label={"Username"}
                placeholder={"Enter your username"}
                size={"md"}
                type={"text"}
                onchange={(e) => changeHandler(e)}
                name={"username"}
                value={data.username}
              />
              <Input
                label={"Password"}
                placeholder={"Enter your password"}
                size={"md"}
                type={"text"}
                onchange={(e) => changeHandler(e)}
                name={"password"}
                value={data.password}
              />
              <KeyStroke
                className="mt-4 mb-2"
                onclick={() => checkCreditenials()}
                block
              >
                Login
              </KeyStroke>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
