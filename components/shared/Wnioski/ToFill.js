import wnioski from "../../../static/pagedata/wnioski";
import FormBar from "../../shared/Wnioski/FormBar";
import { useState, useEffect } from "react";

const ToFill = (props) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms();
  });

  const getForms = () => {
    setForms(wnioski.interaktywne.formularze);
  };
  return (
    <div className="grey-box forms">
      <section className="grey-box-content">
        <ul className="forms-links">
          {forms.map((form) => (
            <li
              onClick={props.onClick}
              id={form}
              key={form}
              className="single-form-link"
            >
              <FormBar
                span={props.span}
                name={form}
                label={props.label}
                icon={props.icon}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToFill;
