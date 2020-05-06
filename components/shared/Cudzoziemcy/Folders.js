import Folder from "./Folder";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import katalogi from "../../../public/static/pagedata/katalogi";
import { pobyt_czasowy } from "../../../public/static/pagedata/zezwolenie";

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
    } else if (props.type == "pobyt_czasowy") {
      setIssues(pobyt_czasowy.dane);
    }
  };

  return (
    <Container className={`grey-box folders ${props.type}`}>
      <h2>{props.header}</h2>
      {issues.map((issue) => (
        <Folder
          type={props.type}
          category={props.header}
          title={issue.tytul}
          options={issue.opcje}
        />
      ))}
    </Container>
  );
};

export default Folders;
