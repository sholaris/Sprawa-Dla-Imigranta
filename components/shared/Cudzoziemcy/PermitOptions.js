import { Container, Row, Col } from "react-bootstrap";
import MenuBlock from "./MenuBlock";
import Link from "next/link";

const PermitOptions = () => {
  return (
    <Container className="grey-box permanent-residence-permit">
      <Row className="permanent-residence-permit">
        <Col xs={8} md={8} lg={4}>
          <Link
            href="/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            passHref
          >
            <MenuBlock
              index={"Podstawowe informacje"}
              title={"Podstawowe informacje"}
            />
          </Link>
        </Col>
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla posiadacza ważnej karty polaka"}
              title={"Dla posiadacza ważnej karty polaka"}
            />
          </Link>
        </Col>
      </Row>
      <Row className="permanent-residence-permit">
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla małżonka polskiego obywatela"}
              title={"Dla małżonka polskiego obywatela"}
            />
          </Link>
        </Col>
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla ofiary handlu ludźmi"}
              title={"Dla ofiary handlu ludźmi"}
            />
          </Link>
        </Col>
      </Row>
      <Row className="permanent-residence-permit">
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla cudzoziemca posiadającego polskie pochodzenie"}
              title={"Dla cudzoziemca posiadającego polskie pochodzenie"}
            />
          </Link>
        </Col>
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla cudzoziemca, któremu udzielono w polsce azylu"}
              title={"Dla cudzoziemca, któremu udzielono w polsce azylu"}
            />
          </Link>
        </Col>
      </Row>
      <Row className="permanent-residence-permit">
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={
                "Dla cudzoziemca przebywającego w polsce na podstawie zgody na pobyt tolerowany"
              }
              title={
                "Dla cudzoziemca przebywającego w polsce na podstawie zgody na pobyt tolerowany"
              }
            />
          </Link>
        </Col>
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={"Dla małoletniego małżonka polskiego obywatela"}
              title={"Dla małoletniego małżonka polskiego obywatela"}
            />
          </Link>
        </Col>
      </Row>
      <Row className="permanent-residence-permit">
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={
                "Dla cudzoziemca przebywającego w polsce na podstawie statusu uchodźcy, ochrony uzupełniającej lub zgody na pobyt ze względów humanitarnych"
              }
              title={
                "Dla cudzoziemca przebywającego w polsce na podstawie statusu uchodźcy, ochrony uzupełniającej lub zgody na pobyt ze względów humanitarnych"
              }
            />
          </Link>
        </Col>
        <Col xs={8} md={8} lg={4}>
          <Link
            href={
              "/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
            }
            passHref
          >
            <MenuBlock
              index={
                "Dla małoletniego dziecka cudzoziemca przebywającego w polsce na podstawie zezwolenia na pobyt stały lub zezwolenia na pobyt rezydenta długoterminowego ue"
              }
              title={
                "Dla małoletniego dziecka cudzoziemca przebywającego w polsce na podstawie zezwolenia na pobyt stały lub zezwolenia na pobyt rezydenta długoterminowego ue"
              }
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PermitOptions;
