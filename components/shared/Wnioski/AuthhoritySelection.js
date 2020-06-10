import { Row, Col, Form } from "react-bootstrap";

const AuthoritySelection = () => {
  return (
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Wniosek skierowany do</Form.Label>
          <Form.Control as="select" name="authority">
            <option>Wojewoda Dolnośląski</option>
            <option>Wojewoda Kujawsko-Pomorski</option>
            <option>Wojewoda Lubuski</option>
            <option>Wojewoda Lubelski</option>
            <option>Wojewoda Mazowiecki</option>
            <option>Wojewoda Małopolski</option>
            <option>Wojewoda Opolski</option>
            <option>Wojewoda Podkarpacki</option>
            <option>Wojewoda Podlaski</option>
            <option>Wojewoda Warmińsko-Mazurski</option>
            <option>Wojewoda Pomorski</option>
            <option>Wojewoda Wielkopolski</option>
            <option>Wojewoda Zachodniopomorski</option>
            <option>Wojewoda Łódzki</option>
            <option>Wojewoda Śląski</option>
            <option>Wojewoda Świętokrzyski</option>
          </Form.Control>
          <Form.Text>* pole jest wymagane</Form.Text>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default AuthoritySelection;
