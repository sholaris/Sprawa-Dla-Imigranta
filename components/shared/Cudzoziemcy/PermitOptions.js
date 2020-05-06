import { Container, Row, Col } from "react-bootstrap";
import MenuBlock from "./MenuBlock";
import Link from "next/link";
import { pobyt_staly } from "../../../public/static/pagedata/zezwolenie";
import { CompressLink } from "../../../lib/utils";

const PermitOptions = () => {
  return (
    <Container className="grey-box permanent-residence-permit">
      {pobyt_staly.map((row) => {
        return (
          <Row className="permanent-residence-permit">
            {row.Row.Cols.map((option) => {
              return (
                <Col xs={8} md={8} lg={4}>
                  <Link
                    href="/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/[id]"
                    as={`/cudzoziemcy/obywatele-panstw-trzecich/zezwolenie-na-pobyt-staly/${CompressLink(
                      option,
                      13
                    )}`}
                    passHref
                  >
                    <MenuBlock index={option} title={option} />
                  </Link>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default PermitOptions;
