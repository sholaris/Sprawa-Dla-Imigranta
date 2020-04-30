import { Row, Col, Form } from "react-bootstrap";

const SectionB = ({ values, errors, handleChange }) => {
  return (
    <Row>
      <Col xs={12}>
        <h3>B. Dokument podróży cudzoziemca</h3>
      </Col>
      <Col xs={12}>
        <Form.Row>
          <Form.Group className="section-B" as={Col} xs={12}>
            <Form.Row>
              <Form.Group className="section-B" as={Col} s={8} md={4} lg={2}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Seria dokumentu</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.docSerie && "input-error"} `}
                    type="text"
                    name="docSerie"
                    value={values.docSerie}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.docSerie && (
                    <p className="error-msg">{errors.docSerie}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group className="section-B" as={Col} s={12} md={10} lg={6}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Numer dokumentu</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.docNumber && "input-error"} `}
                    type="text"
                    name="docNumber"
                    value={values.docNumber}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.docNumber && (
                    <p className="error-msg">{errors.docNumber}</p>
                  )}
                </Form.Group>
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group className="section-B" as={Col} xs={12}>
            <Form.Row>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>
                    Data wydania <br />
                    dokumentu
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.docIssueDate && "input-error"} `}
                    type="date"
                    name="docIssueDate"
                    value={values.docIssueDate}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.docIssueDate && (
                    <p className="error-msg">{errors.docIssueDate}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Data upływu ważności dokumentu</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.docExpiryDate && "input-error"} `}
                    type="date"
                    name="docExpiryDate"
                    value={values.docExpiryDate}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.docExpiryDate && (
                    <p className="error-msg">{errors.docExpiryDate}</p>
                  )}
                </Form.Group>
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group className="filed-title" as={Col} xs={12}>
            <Form.Label>Organ wydający dokument</Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={10} lg={6}>
            <Form.Control
              className={`${errors.docAuthority && "input-error"} `}
              type="text"
              name="docAuthority"
              value={values.docAuthority}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.docAuthority && (
              <p className="error-msg">{errors.docAuthority}</p>
            )}
          </Form.Group>
          <Form.Group className="filed-title" as={Col} xs={12}>
            <Form.Label>
              Liczba innych osób wpisanych do dokumentu podróży
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={8} md={4} lg={2}>
            <Form.Control
              className={`${errors.docOthers && "input-error"} `}
              type="text"
              maxLength={2}
              name="docOthers"
              value={values.docOthers}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.docOthers && (
              <p className="error-msg">{errors.docOthers}</p>
            )}
          </Form.Group>
        </Form.Row>
      </Col>
    </Row>
  );
};

export default SectionB;
