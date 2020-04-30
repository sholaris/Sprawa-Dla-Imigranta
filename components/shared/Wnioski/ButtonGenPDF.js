import { Button, Row } from "react-bootstrap";

const ButtonPDF = () => {
  return (
    <Row>
      <Button type="submit" className="btn-lg pdf" variant="primary">
        Generuj PDF
      </Button>
    </Row>
  );
};

export default ButtonPDF;
