import { Breadcrumb, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateHref } from "../../../lib/utils";

const FoldersHeaderBar = ({ breadcrumb }) => {
  const items = breadcrumb.split("|");
  const section = breadcrumb.split("|");
  return (
    <Container className="grey-box">
      <Row className="folders-navigation">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <FontAwesomeIcon icon="home" />
          </Breadcrumb.Item>
          {items.map((item) => (
            <Breadcrumb.Item
              key={item}
              href={generateHref(items, items.indexOf(item))}
            >
              {section[items.indexOf(item)]}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Row>
    </Container>
  );
};

export default FoldersHeaderBar;
