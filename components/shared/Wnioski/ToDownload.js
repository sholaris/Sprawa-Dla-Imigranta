import wnioski from "../../../static/pagedata/wnioski";
import FormBar from "../../shared/Wnioski/FormBar";
import { useState, useEffect } from "react";

const ToDownload = ({ label, icon, span }) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms();
  });

  const getForms = () => {
    setForms(wnioski.do_pobrania);
  };
  return (
    <div className="grey-box forms">
      <section className="grey-box-content">
        {forms.map((form) => {
          return (
            <React.Fragment>
              <h4 className="form-title">{form.tytul}</h4>
              <div>
                <ul className="forms-links">
                  {form.formularze.map((formularz) => {
                    return (
                      <li
                        id={formularz}
                        key={formularz}
                        className="single-form-link"
                      >
                        <FormBar
                          reference={`../../static/pdfs/${formularz.replace(
                            / /g,
                            "-"
                          )}.pdf`}
                          span={span}
                          name={formularz}
                          label={label}
                          icon={icon}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default ToDownload;
