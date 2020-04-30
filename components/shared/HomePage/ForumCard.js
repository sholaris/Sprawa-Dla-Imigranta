import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForumCard = ({ title, content, icon_name1, icon_name2 = "" }) => {
  return (
    <Card>
      <div className="icon-container">
        <FontAwesomeIcon icon={icon_name1} />
        <FontAwesomeIcon icon={["far", icon_name2]} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ForumCard;
