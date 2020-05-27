import { Row, Col } from "react-bootstrap";
import Note from "./Note";

const FoldersSection = () => {
  return (
    <React.Fragment>
      <hr className="separator-sh"></hr>
      <h1>katalog spraw</h1>
      <Row className="folders-row-content">
        <Col>
          <h2>Wybierz swoją sprawę</h2>
          <Note
            name="note-left"
            content="Katalog spraw w czytelny sposób prezentuje sprawy urzędowe jakie mogą
        Cię zainteresować. Znajdź swoją sprawę i zapoznaj się z jej szczegółami."
          />
        </Col>
        <Col>
          <img src="../static/img/folders.jpg" className="main-content" />
        </Col>
      </Row>
      <hr className="separator-main"></hr>
      <Row className="folders-row-content">
        <Col>
          <img src="../static/img/info_search2.png" className="main-content" />
        </Col>
        <Col>
          <h2>ZNAJDŹ POTRZEBNE INFORMACJE</h2>
          <Note
            name="note-right"
            content="Zapoznaj się z niezbędnymi informacjami dotyczącymi Twojej sprawy. Dowiedz się czy możesz ją zrealizować, jakie wnioski będziesz musiał przygotować, do jakiego urzędu się udać oraz ile będzie Cię to kosztować."
          />
        </Col>
      </Row>
      <hr className="separator-main"></hr>
      <Row className="folders-row-content">
        <Col>
          <h2>WYPEŁNIJ WYMAGANY WNIOSEK</h2>
          <Note
            name="note-left"
            content="Wypełnij potrzebny Ci wniosek poprzez formularz online lub pobierz szablon aby wypełnić go ręcznie. "
          />
        </Col>
        <Col>
          <img src="../static/img/filling_form2.jpg" className="main-content" />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FoldersSection;
