import ToFill from "./ToFill";
import ToDownload from "./ToDownload";
import Form from "./Form";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

const FormsMainContent = (props) => {
  if (props.content == "do pobrania")
    return <ToDownload span="download" label="Pobierz" icon="file-download" />;
  else if (props.content == "interaktywne")
    return (
      <ToFill
        onClick={props.onClick}
        span="fill"
        label="Wypełnij online"
        icon="file-alt"
      />
    );
  else if (
    props.content ==
    "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt stały"
  )
    return <Form title={props.content} />;
  else if (
    props.content ==
    "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego unii europejskiej"
  )
    return <Form1 title={props.content} />;
  else if (
    props.content ==
    "Wniosek o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy"
  )
    return <Form2 title={props.content} />;
  else if (props.content == "Wniosek o przedłużenie wizy krajowej")
    return <Form3 title={props.content} />;
  else if (props.content == "Wniosek o przedłużenie wizy Schengen")
    return <Form3 title={props.content} />;
};

export default FormsMainContent;
