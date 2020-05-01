import Folder from "./Folder";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import katalogi from "../../../static/pagedata/katalogi";

const Folders = (props) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues();
  });

  const getIssues = () => {
    if (props.type == "obywatele_ue") {
      setIssues(katalogi.obywatel_ue);
    } else if (props.type == "obywatele_wb") {
      setIssues(katalogi.obywatel_wb);
    } else if (props.type == "obywatele_pt") {
      setIssues(katalogi.obywatel_pt);
    }
  };

  return (
    <Container className="grey-box folders">
      <h2>{props.header}</h2>
      {issues.map((issue) => (
        <Folder
          onClick={props.onClick}
          title={issue.tytul}
          options={issue.opcje}
        />
      ))}
    </Container>
  );
};

export default Folders;
