import { Row, Col } from "react-bootstrap";

const FormHeader = ({ title }) => {
  return (
    <Row>
      <Col className="form-header" xs={12}>
        <hr className="form-title-separator" />
        <h1>{title}</h1>
        <hr className="form-title-separator" />
      </Col>
      <Col className="language-info" xs={12}>
        <h4>Uwaga! Wniosek należy wypełnić w języku polskim.</h4>
      </Col>
    </Row>
  );
};

export default FormHeader;
