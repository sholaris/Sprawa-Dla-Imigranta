import { Jumbotron } from "react-bootstrap";

const Note = ({ name, content }) => {
  return (
    <Jumbotron className={name}>
      <p className="note-content">{content}</p>
    </Jumbotron>
  );
};

export default Note;
