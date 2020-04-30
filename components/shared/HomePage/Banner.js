import { Jumbotron } from "react-bootstrap";
import ButtonLink from "./ButtonLink";

const Banner = () => {
  return (
    <Jumbotron className="banner">
      <h1>Formalności dla każdego!</h1>
      <p className="content">
        Wszystkie sprawy w czytelnym katalogu, formularze dostępne do
        wypełnienia online oraz porady innych osób na forum. W trzech prostych
        krokach zrealizuj swoją sprawę urzędową. Bez konieczności szukania
        informacji na dziesiątkach stron w internecie czy umawiania się na
        specjalne konsultacje prawne.
      </p>
      <p className="button">
        <ButtonLink
          title="Załatw sprawę"
          id="cudzoziemcy"
          reference="cudzoziemcy"
        />
      </p>
    </Jumbotron>
  );
};

export default Banner;
