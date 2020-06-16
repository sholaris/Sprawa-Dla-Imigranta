import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useForm from "./useForm";
import validate from "../Walidacja/validateForm";
import FormHeader from "./FormHeader";
import AuthoritySelection from "./AuthhoritySelection";

const initialState = {
  surname: "",
  familyName: "",
  name1: "",
  fathersName: "",
  mothersName: "",
  mothersMaidenName: "",
  birthDate: "",
  sex: "",
  birthPlace: "",
  birthCountry: "",
  nationality: "",
  citizenShip: "",
  maritalStatus: "",
  education: "",
  practisedProffesion: "",
  length: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  firstDateInPoland: "",
  stayPeriod: "",
  docSerie: "",
  docNumber: "",
  docIssueDate: "",
  docExpiryDate: "",
  docAuthority: "",
  docOthers: "",
  resDistrict: "",
  resMunicipality: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",
  newVisaPeriod: "",
  toDate: "",
  visaType: "",
  financialResource: "",
  employerDesc: "",
  justification: "",
};

const InteractiveForm = (props) => {
  const visa = props.title.split(" ");
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    initialState
  );

  function submit() {
    if (no_err == true) {
      location.replace("../../static/pdfs/Wniosek-o-przedłużenie-wizy-krajowej.pdf")
    } else {
      console.log(errors);
    }
  }

  return (
    <div className="gray-box forms">
      <Container>
        <Row>
          <Col xs={12}>
            <Form onSubmit={handleSubmit} noValidate>
              <FormHeader title={props.title} />
              <AuthoritySelection />
              <Row>
                <Col xs={12}>
                  <h3>A. Dane osobowe cudzoziemca</h3>
                </Col>
                <Col xs={12}>
                  <Form.Row>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>1. Nazwisko</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.surname && "input-error"} `}
                        type="text"
                        name="surname"
                        value={values.surname}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.surname && (
                        <p className="error-msg">{errors.surname}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>2. Nazwisko(a) poprzednie</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="previousSurname1"
                        value={values.previousSurname1}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="previousSurname2"
                        value={values.previousSurname2}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>3. Imię (imiona)</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.name1 && "input-error"} `}
                        type="text"
                        name="name1"
                        value={values.name1}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.name1 && (
                        <p className="error-msg">{errors.name1}</p>
                      )}
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="name2"
                        value={values.name2}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>4. Imię ojca</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.fathersName && "input-error"} `}
                        type="text"
                        name="fathersName"
                        value={values.fathersName}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.fathersName && (
                        <p className="error-msg">{errors.fathersName}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>5. Imię matki</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.motherName && "input-error"} `}
                        type="text"
                        name="mothersName"
                        value={values.motherName}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.motherName && (
                        <p className="error-msg">{errors.motherName}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>6. Nazwisko rodowe matki</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${
                          errors.mothersMaidenName && "input-error"
                        } `}
                        type="text"
                        name="mothersMaidenName"
                        value={values.mothersMaidenName}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.mothersMaidenName && (
                        <p className="error-msg">{errors.mothersMaidenName}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>7. Data urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={6} lg={3} as={Col}>
                      <Form.Control
                        className={`${errors.birthDate && "input-error"} `}
                        type="date"
                        name="birthDate"
                        value={values.birthDate}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.birthDate && (
                        <p className="error-msg">{errors.birthDate}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title sex" xs={12} as={Col}>
                      <Form.Label>8. Płeć</Form.Label>
                    </Form.Group>
                    <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
                      <Form.Check
                        id="Male"
                        type="radio"
                        label="Mężczyzna"
                        name="sex"
                        value="M"
                        onChange={handleChange}
                      ></Form.Check>
                    </Form.Group>
                    <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
                      <Form.Check
                        id="Female"
                        type="radio"
                        label="Kobieta"
                        name="sex"
                        value="K"
                        onChange={handleChange}
                      ></Form.Check>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.sex && <p className="error-msg">{errors.sex}</p>}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>9. Miejsce urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.birthPlace && "input-error"} `}
                        type="text"
                        name="birthPlace"
                        value={values.birthPlace}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.birthPlace && (
                        <p className="error-msg">{errors.birthPlace}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>10. Państwo urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.birthCountry && "input-error"} `}
                        type="text"
                        name="birthCountry"
                        value={values.birthCountry}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.birthCountry && (
                        <p className="error-msg">{errors.birthCountry}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>11. Obywatelstwo</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.citizenShip && "input-error"} `}
                        type="text"
                        name="citizenShip"
                        value={values.citizenShip}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.citizenShip && (
                        <p className="error-msg">{errors.citizenShip}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>12. Narodowość</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.nationality && "input-error"} `}
                        type="text"
                        name="nationality"
                        value={values.nationality}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.nationality && (
                        <p className="error-msg">{errors.nationality}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>13. Stan cywilny</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="kawaler/panna"
                      ></Form.Check>
                      <Form.Check
                        type="checkbox"
                        label="żonaty/zamężna"
                      ></Form.Check>
                      <Form.Check
                        type="checkbox"
                        label="rowiedziona/rozwiedziony"
                      ></Form.Check>
                      <Form.Check
                        type="checkbox"
                        label="wdowa/wdowiec"
                      ></Form.Check>
                      <Form.Check
                        type="checkbox"
                        label="w separacji"
                      ></Form.Check>
                      <Form.Check type="checkbox" label="inne"></Form.Check>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.maritalStatus && (
                        <p className="error-msg">{errors.maritalStatus}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>14. Wykształcenie</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.education && "input-error"} `}
                        type="text"
                        name="education"
                        value={values.education}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.education && (
                        <p className="error-msg">{errors.education}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>15. Zawód wykonywany</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${
                          errors.practisedProffesion && "input-error"
                        } `}
                        type="text"
                        name="practisedProfession"
                        value={values.practisedProffesion}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.practisedProffesion && (
                        <p className="error-msg">
                          {errors.practisedProffesion}
                        </p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h3>B. Dokument podróży cudzoziemca</h3>
                </Col>
                <Col xs={12}>
                  <Form.Row>
                    <Form.Group className="section-B" as={Col} xs={12}>
                      <Form.Row>
                        <Form.Group
                          className="section-B"
                          as={Col}
                          s={8}
                          md={4}
                          lg={2}
                        >
                          <Form.Group className="filed-title" as={Col} xs={12}>
                            <Form.Label>Seria dokumentu</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${errors.docSerie && "input-error"} `}
                              type="text"
                              name="docSerie"
                              value={values.docSerie}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.docSerie && (
                              <p className="error-msg">{errors.docSerie}</p>
                            )}
                          </Form.Group>
                        </Form.Group>
                        <Form.Group
                          className="section-B"
                          as={Col}
                          s={12}
                          md={10}
                          lg={6}
                        >
                          <Form.Group className="filed-title" as={Col} xs={12}>
                            <Form.Label>Numer dokumentu</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.docNumber && "input-error"
                              } `}
                              type="text"
                              name="docNumber"
                              value={values.docNumber}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.docNumber && (
                              <p className="error-msg">{errors.docNumber}</p>
                            )}
                          </Form.Group>
                        </Form.Group>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group className="section-B" as={Col} xs={12}>
                      <Form.Row>
                        <Form.Group as={Col} s={12} md={6} lg={3}>
                          <Form.Group className="filed-title" as={Col} xs={12}>
                            <Form.Label>
                              Data wydania <br />
                              dokumentu
                            </Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.docIssueDate && "input-error"
                              } `}
                              type="date"
                              name="docIssueDate"
                              value={values.docIssueDate}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.docIssueDate && (
                              <p className="error-msg">{errors.docIssueDate}</p>
                            )}
                          </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} s={12} md={6} lg={3}>
                          <Form.Group className="filed-title" as={Col} xs={12}>
                            <Form.Label>
                              Data upływu ważności dokuemntu
                            </Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.docExpiryDate && "input-error"
                              } `}
                              type="date"
                              name="docExpiryDate"
                              value={values.docExpiryDate}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.docExpiryDate && (
                              <p className="error-msg">
                                {errors.docExpiryDate}
                              </p>
                            )}
                          </Form.Group>
                        </Form.Group>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group className="filed-title" as={Col} xs={12}>
                      <Form.Label>Organ wydający dokument</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={10} lg={6}>
                      <Form.Control
                        className={`${errors.docAuthority && "input-error"} `}
                        type="text"
                        name="docAuthority"
                        value={values.docAuthority}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.docAuthority && (
                        <p className="error-msg">{errors.docAuthority}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" as={Col} xs={12}>
                      <Form.Label>
                        Liczba innych osób wpisanych do dokumentu podróży
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={8} md={4} lg={2}>
                      <Form.Control
                        className={`${errors.docOthers && "input-error"} `}
                        type="text"
                        maxLength={2}
                        name="docOthers"
                        value={values.docOthers}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.docOthers && (
                        <p className="error-msg">{errors.docOthers}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h3>C. Miejsce zamieszkania w Rzeczpospolitej Polskiej</h3>
                </Col>
                <Col xs={12}>
                  <Form.Row>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>1. Miejscowość</Form.Label>
                    </Form.Group>
                    <Form.Group xs={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.resCity && "input-error"} `}
                        type="text"
                        name="resCity"
                        value={values.resCity}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.resCity && (
                        <p className="error-msg">{errors.resCity}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>2. Ulica</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={10} lg={6}>
                      <Form.Control
                        className={`${errors.resStreet && "input-error"} `}
                        type="text"
                        name="resStreet"
                        value={values.resStreet}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.resStreet && (
                        <p className="error-msg">{errors.resStreet}</p>
                      )}
                    </Form.Group>
                    <Form.Group
                      className="three-inputs"
                      as={Col}
                      s={12}
                      lg={10}
                    >
                      <Form.Row>
                        <Form.Group as={Col} s={12} md={6} lg={3}>
                          <Form.Group className="filed-title" as={Col} xs={12}>
                            <Form.Label>3. Numer domu</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} s={12}>
                            <Form.Control
                              className={`${
                                errors.resHomeNumber && "input-error"
                              } `}
                              type="text"
                              name="resHomeNumber"
                              value={values.resHomeNumber}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.resHomeNumber && (
                              <p className="error-msg">
                                {errors.resHomeNumber}
                              </p>
                            )}
                          </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} s={12} md={6} lg={3}>
                          <Form.Group className="filed-title" as={Col} s={12}>
                            <Form.Label>4. Numer mieszkania</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.resApartmentNumber && "input-error"
                              } `}
                              type="text"
                              name="resApartmentNumber"
                              value={values.resApartmentNumber}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.resApartmentNumber && (
                              <p className="error-msg">
                                {errors.resApartmentNumber}
                              </p>
                            )}
                          </Form.Group>
                        </Form.Group>
                        <Form.Group as={Col} s={12} md={6} lg={3}>
                          <Form.Group className="filed-title" as={Col} s={12}>
                            <Form.Label>5. Kod pocztowy</Form.Label>
                          </Form.Group>
                          <Form.Group s={12} md={10} lg={8} as={Col}>
                            <Form.Control
                              className={`${
                                errors.resPostalCode && "input-error"
                              } `}
                              type="text"
                              maxLength={6}
                              placeholder="nn-nnn"
                              name="resPostalCode"
                              value={values.resPostalCode}
                              onChange={handleChange}
                            ></Form.Control>
                            <Form.Text>* pole jest wymagane</Form.Text>
                            {errors.resPostalCode && (
                              <p className="error-msg">
                                {errors.resPostalCode}
                              </p>
                            )}
                          </Form.Group>
                        </Form.Group>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>6. Województwo</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control as="select">
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                        <option>dolnośląskie</option>
                      </Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>7. Powiat</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.resDistrict && "input-error"} `}
                        type="text"
                        name="resDistrict"
                        value={values.resDistrict}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.resDistrict && (
                        <p className="error-msg">{errors.resDistrict}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>8. Gmina</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${
                          errors.resMunicipality && "input-error"
                        } `}
                        type="text"
                        name="resMunicipality"
                        value={values.resMunicipality}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.resMunicipality && (
                        <p className="error-msg">{errors.resMunicipality}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h3>D. Uzasadnienie wniosku</h3>
                </Col>
                <Col xs={12}>
                  <h4>1.Proszę o przedłużenie wizy {visa[visa.length - 1]}</h4>
                </Col>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={4} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>na okres</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.newVisaPeriod && "input-error"}`}
                          type="text"
                          name="newVisaPeriod"
                          value={values.newVisaPeriod}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.newVisaPeriod && (
                          <p className="error-msg">{errors.newVisaPeriod}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Do</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.toDate && "input-error"}`}
                          type="date"
                          name="toDate"
                          value={values.toDate}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.toDate && (
                          <p className="error-msg">{errors.toDate}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="jednokrotnej"
                    name="visaType"
                    value="1"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="dwukrotnej"
                    name="visaType"
                    value="2"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Check
                    type="checkbox"
                    label="wielokrotnej"
                    name="visaType"
                    value="3"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>*pole jest wymagane</Form.Text>
                  {errors.visaType && (
                    <p className="error-msg">{errors.visaType}</p>
                  )}
                </Form.Group>

                <Col xs={12}>
                  <h4>2.Uzasadnienie wniosku</h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    className={`${errors.justification && "input-error"}`}
                    as="textarea"
                    name="justification"
                    value={values.justification}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                  <Form.Text>*pole jest wymagane</Form.Text>
                  {errors.justification && (
                    <p className="error-msg">{errors.justification}</p>
                  )}
                </Form.Group>

                <Col xs={12}>
                  <h4>
                    3. Środki finansowe na pokrycie kosztów utrzymania podczas
                    pobytu w Rzeczpospolitej Polskiej (zaznaczyć wszystkie
                    występujące możliwości)
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12}>
                  <Form.Check type="checkbox" label="gotówka"></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="karty kredytowe"
                    name="financialResource"
                    value="1"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="ubezpieczenie podróżne"
                    name="financialResource"
                    value="2"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="ubezpieczenie zdrowotne"
                    name="financialResource"
                    value="3"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="czeki podróżne"
                    name="financialResource"
                    value="4"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="inne"
                    name="financialResource"
                    value="5"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>*pole jest wymagane</Form.Text>
                  {errors.financialResource && (
                    <p className="error-msg">{errors.financialResource}</p>
                  )}
                </Form.Group>

                <Col xs={12}>
                  <h4>4. Dane o zatrudnieniu cudzoziemca na terytorium RP</h4>
                </Col>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>
                    Podmiot powierzający wykonywanie pracy cudzoziemcowi
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    className={`${errors.employerDesc && "input-error"}`}
                    as="textarea"
                    name="employerDesc"
                    values={values.employerDesc}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                  <Form.Text>*pole jest wymagane</Form.Text>
                  {errors.employerDesc && (
                    <p className="error-msg">{errors.employerDesc}</p>
                  )}
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    5. Pobyty i podróże zagraniczne w ciągu ostatnich 5 lat
                    (kraj, okres pobytu)
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control as="textarea" rows={7}></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>6. Ostatnio wydana wiza krajowa</h4>
                </Col>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Data pierwszego wjazdu</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${
                            errors.firstDateInPoland && "input-error"
                          }`}
                          type="date"
                          name="firstDateInPoland"
                          value={values.firstDateInPoland}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.firstDateInPoland && (
                          <p className="error-msg">
                            {errors.firstDateInPoland}
                          </p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Okres pobytu</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.stayPeriod && "input-error"}`}
                          type="text"
                          name="stayPeriod"
                          value={values.stayPeriod}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.stayPeriod && (
                          <p className="error-msg">{errors.stayPeriod}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={2}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Seria dokumentu</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.docSerie && "input-error"}`}
                          type="text"
                          name="docSerie"
                          value={values.docSerie}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.docSerie && (
                          <p className="error-msg">{errors.docSerie}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={4}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Numer dokumentu</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.docNumber && "input-error"}`}
                          type="text"
                          name="docNumber"
                          value={values.docNumber}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>*pole jest wymagane</Form.Text>
                        {errors.docNumber && (
                          <p className="error-msg">{errors.docNumber}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group className="section-B" as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} s={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Data wydania <br />
                          dokumentu
                        </Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.docIssueDate && "input-error"}`}
                          type="date"
                          name="docIssueDate"
                          value={values.docIssueDate}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>* pole jest wymagane</Form.Text>
                        {errors.docIssueDate && (
                          <p className="error-msg">{errors.docIssueDate}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} s={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Data upływu ważności dokumentu</Form.Label>
                      </Form.Group>
                      <Form.Group as={Col} xs={12}>
                        <Form.Control
                          className={`${errors.docExpiryDate && "input-error"}`}
                          type="date"
                          name="docExpiryDate"
                          value={values.docExpiryDate}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>* pole jest wymagane</Form.Text>
                        {errors.docExpiryDate && (
                          <p className="error-msg">{errors.docExpiryDate}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Organ wydający dokument</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    className={`${errors.docAuthority && "input-error"}`}
                    type="text"
                    name="docAuthority"
                    value={values.docAuthority}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.docAuthority && (
                    <p className="error-msg">{errors.docAuthority}</p>
                  )}
                </Form.Group>
              </Row>
              <Row>
                <Col xs={12}>
                  <h4>Załączniki do wniosku</h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control as="textarea" rows={7}></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Button type="submit" className="btn-lg pdf" variant="primary">
                  Generuj PDF
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InteractiveForm;
