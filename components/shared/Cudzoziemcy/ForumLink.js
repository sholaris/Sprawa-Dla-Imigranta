import { Container, Row, Col, Button } from "react-bootstrap";

const ForumLink = () => {
  return (
    <Container className="grey-box goto-forum">
      <Container className="row-wrapper">
        <Row>
          <Col>
            <h4>Po więcej informacji udaj się na nasze forum!</h4>
          </Col>
          <Col className="button-col">
            <Button>Forum</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ForumLink;
