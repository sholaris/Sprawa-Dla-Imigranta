import { Row, Col, Form } from "react-bootstrap";

const SectionC = ({ values, errors, handleChange }) => {
  return (
    <Row>
      <Col xs={12}>
        <h3>C. Miejsce pobytu cudzoziemca</h3>
      </Col>
      <Col xs={12}>
        <Form.Row>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>1. Województwo</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control as="select" name="resVivodship">
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
              <option>dolnośląskie</option>
            </Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>2. Powiat</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.resDistrict && "input-error"} `}
              type="text"
              name="resDistrict"
              value={values.resDistrict}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.resDistrict && (
              <p className="error-msg">{errors.resDistrict}</p>
            )}
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>3. Gmina</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.resMunicipality && "input-error"} `}
              type="text"
              name="resMunicipality"
              value={values.resMunicipality}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.resMunicipality && (
              <p className="error-msg">{errors.resMunicipality}</p>
            )}
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>4. Miasto</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.resCity && "input-error"} `}
              type="text"
              name="resCity"
              value={values.resCity}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.resCity && <p className="error-msg">{errors.resCity}</p>}
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>5. Ulica</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.resStreet && "input-error"} `}
              type="text"
              name="resStreet"
              value={values.resStreet}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.resStreet && (
              <p className="error-msg">{errors.resStreet}</p>
            )}
          </Form.Group>
          <Form.Group className="three-inputs" as={Col} s={12} lg={10}>
            <Form.Row>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>6. Numer domu</Form.Label>
                </Form.Group>
                <Form.Group as={Col} s={12}>
                  <Form.Control
                    className={`${errors.resHomeNumber && "input-error"} `}
                    type="text"
                    name="resHomeNumber"
                    value={values.resHomeNumber}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.resHomeNumber && (
                    <p className="error-msg">{errors.resHomeNumber}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} s={12}>
                  <Form.Label>7. Numer mieszkania</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.resApartmentNumber && "input-error"} `}
                    type="text"
                    name="resApartmentNumber"
                    value={values.resApartmentNumber}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.resApartmentNumber && (
                    <p className="error-msg">{errors.resApartmentNumber}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} s={12}>
                  <Form.Label>8. Kod pocztowy</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.resPostalCode && "input-error"} `}
                    type="text"
                    maxLength={6}
                    placeholder="nn-nnn"
                    name="resPostalCode"
                    value={values.resPostalCode}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.resPostalCode && (
                    <p className="error-msg">{errors.resPostalCode}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group className="filed-title" as={Col} xs={12}>
                <Form.Label>
                  9. Tytuł prawny do zajmowania przez wnioskodawcę lokalu
                </Form.Label>
              </Form.Group>
            </Form.Row>
          </Form.Group>
        </Form.Row>
      </Col>
    </Row>
  );
};

export default SectionC;
