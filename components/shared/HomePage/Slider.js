import { Carousel, Container } from "react-bootstrap";

const Slider = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item datainterval="1000000">
          <img
            className="d-block w-100 "
            src="../static/img/img01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Dostępność</h3>
            <p>Wszystkie potrzebne procedury w jednym miejscu</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="../static/img/img02.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Informacje</h3>
            <p>Informacje przedstawione w przystępny sposób</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="../static/img/img03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Formalności</h3>
            <p>Wnioski i formularze dostępne do wypełnienia online</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="../static/img/img03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Społeczność</h3>
            <p>Zbiór porad i wspólnych doświadczeń na wspólnym forum</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
