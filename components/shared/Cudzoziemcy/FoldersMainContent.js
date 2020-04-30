import OriginMenu from "./OriginMenu";
import Folders from "./Folders";
import Zezwolenie from "./Zezwolenie";

const FoldersMainContent = (props) => {
  if (props.content == "") {
    return <OriginMenu onClick={props.onClick} />;
  } else if (props.content == "obywatele_ue") {
    return (
      <Folders
        onClick={props.onClick}
        header={props.header}
        type={props.content}
      />
    );
  } else if (props.content == "obywatele_pt") {
    return (
      <Folders
        onClick={props.onClick}
        header={props.header}
        type={props.content}
      />
    );
  } else if (props.content == "obywatele_wb") {
    return (
      <Folders
        onClick={props.onClick}
        header={props.header}
        type={props.content}
      />
    );
  } else if (props.content == "Zezwolenie na pobyt stały") {
    return <Zezwolenie />;
  }
};

export default FoldersMainContent;
