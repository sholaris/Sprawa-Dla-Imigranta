import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../public/static/fontawesome/fontawesome";

const FormBar = ({ name, label, icon, span, reference }) => {
  return (
    <a download="" href={reference}>
      <span id={name} className="name">
        <span id={name}>{name}</span>
      </span>
      <span className={span}>
        <span>{label}</span>
        <span className="icon">
          <FontAwesomeIcon className="form-bar" icon={icon} />
        </span>
      </span>
    </a>
  );
};

export default FormBar;
