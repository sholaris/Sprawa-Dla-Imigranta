import zezwolenie_opcje from "../../../static/pagedata/zezwolenie";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuBlock from "./MenuBlock";

const Zezwolenie = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getOptions();
  });

  const getOptions = () => {
    setOptions(zezwolenie_opcje);
  };
  return (
    <Container className="grey-box permanent-residence">
      <Row xs={2} md={2} lg={2} className="permanent-residence-permit">
        {options.map((option) => (
          <Col>
            <MenuBlock index={option} title={option} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Zezwolenie;
