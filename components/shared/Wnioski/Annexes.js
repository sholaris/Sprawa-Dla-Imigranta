import { Row, Col, Form } from "react-bootstrap";

const Annexes = () => {
  return (
    <Row>
      <Col xs={12}>
        <h4>Załączniki do wniosku</h4>
      </Col>
      <Form.Group as={Col} xs={12} md={10} lg={6}>
        <Form.Control as="textarea" rows={7} name="annexes"></Form.Control>
      </Form.Group>
    </Row>
  );
};

export default Annexes;
