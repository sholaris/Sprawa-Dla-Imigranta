import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonLink from "./ButtonLink";

const FormsSection = () => {
  return (
    <React.Fragment>
      <hr className="separator-sh"></hr>
      <h1>Formularze online</h1>
      <Row className="grey-box">
        <Col>
          <div className="steps">
            <div className="entity-paragraph">
              <div className="step-number">
                <h3>Krok 1</h3>
              </div>
              <div className="step-line"></div>
              <div className="step-label-wrapper">
                <FontAwesomeIcon icon="file-alt" />
              </div>
              <div className="step-content">
                <h3>
                  Znajdź interesujący cię formularz w spisie dostępnych wniosków
                  do wypełnienia
                </h3>
                <hr className="extra-bold"></hr>
                <div className="paragraph-details">
                  <p>
                    Na osobnej stronie znajdziesz listę wniosków, które możesz
                    wypełnić przechodząc do formularza online.
                  </p>
                  <p>
                    Masz też możliwość pobrania pustego szablonu wniosku do
                    ręcznego wypełnienia.
                  </p>
                </div>
              </div>
            </div>
            <div className="entity-paragraph">
              <div className="step-number">
                <h3>Krok 2</h3>
              </div>
              <div className="step-line"></div>
              <div className="step-label-wrapper">
                <FontAwesomeIcon icon="edit" />
              </div>
              <div className="step-content">
                <h3>
                  Wypełnij wybrany wniosek przechodząc przez interaktywny
                  formularz
                </h3>
                <hr className="extra-bold"></hr>
                <div className="paragraph-details">
                  <p>
                    Specjalnie stworzone formularze online pozwolą Ci wypełnić
                    wybrany wniosek w poprawny sposób.
                  </p>
                  <p>
                    Wpisywane przez Ciebie dane będą na bieżąco weryfikowane i
                    sprawdzane.
                  </p>
                  <p>
                    Pamiętaj! Wnioski należy wypełnić wyłacznie w języku
                    polskim.
                  </p>
                </div>
              </div>
            </div>
            <div className="entity-paragraph">
              <div className="step-number">
                <h3>Krok 3</h3>
              </div>
              <div className="step-label-wrapper">
                <FontAwesomeIcon icon="file-download" />
              </div>
              <div className="step-content">
                <h3>
                  Pobierz wypełniony wniosek i zanieś do odpowiedniego urzędu
                </h3>
                <hr className="extra-bold"></hr>
                <div className="paragraph-details">
                  <p>
                    Wszystko gotowe! Możesz teraz pobrać gotowy wniosek i złożyć
                    go w odpowiednim urzędzie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="inner-container">
            <div className="img-wrapper">
              <img src="../static/img/filling_form3.jpg" />
            </div>
          </div>

          <div className="button-container">
            <ButtonLink
              title="Wypełnij formularz"
              id="interaktywne-formularze"
              reference="wnioski"
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormsSection;
