import { Row, Col, Button, Container } from "react-bootstrap";
import MenuBlock from "./MenuBlock";

const OriginMenu = (props) => {
  return (
    <React.Fragment>
      <Container className="grey-box origins">
        <div className="origin-header">
          <h2>Wybierz swoje pochodzenie</h2>
        </div>
        <Container className="row-wrapper">
          <Row className="origins">
            <Col>
              <MenuBlock
                index="obywatele_ue"
                link="obywatele-ue-oraz-eogszwajcarii-i-członkowie-ich-rodzin"
                title="Obywatele UE (oraz EOG/Szwajcarii) i członkowie ich rodzin"
                onClick={props.onClick}
              />
            </Col>
            <Col>
              <MenuBlock
                index="obywatele_pt"
                link="obywatele-panstw-trzecich"
                title="Obywatele państw trzecich "
                onClick={props.onClick}
              />
            </Col>
          </Row>
        </Container>
        <Container className="row-wrapper">
          <Row className="origins last-row">
            <Col>
              <MenuBlock
                index="obywatele_wb"
                link="obywatele-wielkiej-brytani"
                title="Obywatele Wielkiej Brytani (brexit) "
                onClick={props.onClick}
              />
            </Col>
          </Row>
        </Container>
      </Container>
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
    </React.Fragment>
  );
};

export default OriginMenu;
