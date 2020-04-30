import Link from "next/link";
import { Button } from "react-bootstrap";

const ButtonLink = (props) => (
  <Link href={`/${props.reference}`} as={`/${props.id}`}>
    <Button className="btn-lg" variant="primary">
      {props.title}
    </Button>
  </Link>
);

export default ButtonLink;
