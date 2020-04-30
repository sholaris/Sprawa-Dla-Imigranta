import { Row, Col } from "react-bootstrap";
import ForumCard from "./ForumCard";

const ForumSection = () => {
  return (
    <React.Fragment>
      <hr className="separator-sh"></hr>
      <h1>Wspólne forum</h1>
      <Row>
        <Col>
          <ForumCard
            title="Przeglądaj"
            content="Pomocne porady oraz dodatkowe informacje znajdziesz we wpisach użytkowników forum"
            icon_name1="user"
            icon_name2="list-alt"
          />
        </Col>
        <Col>
          <ForumCard
            title="Twórz"
            content="Zadaj szczegółowe pytanie innym tworząc własny wpis lub komentarz do istniejącego tematu"
            icon_name1="user-edit"
          />
        </Col>
        <Col>
          <ForumCard
            title="Głosuj"
            content="Oddaj głos na odpowiedź, która była Ci pomocna - inni szybciej ją odnajdą"
            icon_name1="user-check"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ForumSection;
