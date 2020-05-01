import { Breadcrumb, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const parseText = (text) => {
  var displayedText = true;
  for (var x = 0; x < text.length; x++) {
    var c = text.charAt(x);

    if (displayedText && c == "-") {
      text = text.substring(0, x) + " " + text.substring(x + 1, text.length);
    }
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const FoldersHeaderBar = () => {
  return (
    <Container className="grey-box">
      <Row className="folders-navigation">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            {/* <FontAwesomeIcon icon="home" /> */}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </Container>
  );
};

export default FoldersHeaderBar;
