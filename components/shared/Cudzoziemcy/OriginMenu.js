import { Row, Col, Button, Container } from "react-bootstrap";
import MenuBlock from "./MenuBlock";
import Link from "next/link";

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
              <Link
                href="/obywatele-ue"
                as="cudzoziemcy/obywatele-ue-oraz-eogszwajcarii-i-członkowie-ich-rodzin"
                passHref
              >
                <MenuBlock
                  index="obywatele_ue"
                  title="Obywatele UE (oraz EOG/Szwajcarii) i członkowie ich rodzin"
                />
              </Link>
            </Col>
            <Col>
              <Link
                href="/obywatele-pt"
                as="cudzoziemcy/obywatele-panstw-trzecich"
                passHref
              >
                <MenuBlock
                  index="obywatele_pt"
                  title="Obywatele państw trzecich "
                />
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="row-wrapper">
          <Row className="origins last-row">
            <Col>
              <Link
                href="/obywatele-wb"
                as="cudzoziemcy/obywatele-wielkiej-brytanii-(brexit)"
                passHref
              >
                <MenuBlock
                  index="obywatele_wb"
                  title="Obywatele Wielkiej Brytani (brexit) "
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default OriginMenu;
