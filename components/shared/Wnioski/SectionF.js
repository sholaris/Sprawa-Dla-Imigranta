import { Row, Col, Form } from "react-bootstrap";

const SectionF = ({ values, errors, handleChange }) => {
  return (
    <Row>
      <Col xs={12}>
        <h3>F. Uzasadnienie wniosku</h3>
      </Col>
      <Form.Group as={Col} xs={12} md={10} lg={6}>
        <Form.Control
          className={`${errors.justification && "input-error"} `}
          as="textarea"
          rows={7}
          name="justification"
          value={values.justification}
          onChange={handleChange}
        ></Form.Control>
        <Form.Text>* pole jest wymagane</Form.Text>
        {errors.justification && (
          <p className="error-msg">{errors.justification}</p>
        )}
      </Form.Group>
    </Row>
  );
};

export default SectionF;
