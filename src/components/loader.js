import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <>
      <Container className="vh-100">
        <Row className="h-100">
          <Col
            style={{
              display: "grid"
            }}
          >
            <Spinner
              animation="grow"
              style={{
                margin: "auto"
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
