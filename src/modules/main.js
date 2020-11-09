import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { NavHead } from "../components/header";
import { KeyStroke } from "../components/button";
import { Input } from "../components/input";

export const Main = () => {
  const [url, setURL] = React.useState({
    first: "",
    second: ""
  });
  const [view, setView] = React.useState({
    first: false,
    second: false
  });

  React.useEffect(() => {
    var timeTwo;
    setView({ ...view, first: false });
    clearTimeout(timeTwo)
    timeTwo = setTimeout(() => {
      setView({ ...view, first: true });
    }, 400)
    // return () => {
    //   clearTimeout(timeTwo);
    // }
  }, [url.first]);
  React.useEffect(() => {
    var timeOne;
    setView({ ...view, second: false });
    clearTimeout(timeOne)
    timeOne = setTimeout(() => {
      setView({ ...view, second: true });
    }, 400)
    // return () => {
    //   clearTimeout(time);
    // }
  }, [url.second]);

  const logout = () => {
    localStorage.removeItem("auth-status");
    window.location.href = "/auth/login";
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    if (!/https:\/\//.test(value)) {
      setURL({ ...url, [name]: `https://${value}` });
    } else {
      setURL({ ...url, [name]: value });
    }
  };

  // const viewHandler = (type) => {
  //   setView({...view, [type] : !view[type]})
  // }

  return (
    <>
      <NavHead>
        <KeyStroke onclick={logout}>LOGOUT</KeyStroke>
      </NavHead>

      <Container>
        <Row
          style={{
            height: "200px",
            border: "1px solid #a9a9a9",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px 0 #a9a9a9",
            borderRadius: "1rem",
            margin: "2rem 0"
          }}
        >
          <Col xs={10} md={3} className="m-auto">
            <div className="lead font-weight-normal py-1 px-2 border d-inline bg-light text-secondary rounded">
              officialSearch
            </div>
          </Col>
          <Col xs={5} md={3} className="m-auto">
            <Form>
              <Input
                label=""
                placeholder="first url"
                type="text"
                name="first"
                value={url.first}
                onchange={changeHandler}
              />
              {/* <KeyStroke className="w-75">View</KeyStroke> */}
            </Form>
          </Col>
          <Col xs={5} md={3} className="m-auto">
            <Form>
              <Input
                label=""
                placeholder="second url"
                type="text"
                name="second"
                value={url.second}
                onchange={changeHandler}
              />
              {/* <KeyStroke className="w-75">View</KeyStroke> */}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="mx-auto">
            {view.first ? (
              <iframe
                is="x-frame-bypass"
                src={url.first}
                style={{
                  width: "100%",
                  height: "300px"
                }}
                title="first"
              ></iframe>
            ) : (
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#a9a9a9",
                    display: "grid",
                    placeItems: "center"
                  }}
                >
                  Loading
                </div>
              )}
          </Col>
          <Col xs={6} className="mx-auto">
            {view.second ? (
              <iframe
                is="x-frame-bypass"
                src={url.second}
                style={{
                  width: "100%",
                  height: "300px"
                }}
                title="second"
              ></iframe>
            ) : (
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#a9a9a9",
                    display: "grid",
                    placeItems: "center"
                  }}
                >
                  Loading
                </div>
              )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

