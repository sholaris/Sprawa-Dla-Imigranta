import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useForm from "./useForm";
import validate from "../Walidacja/validateForm2";

const initialState = {
  surname: "",
  previousName1: "",
  previousName2: "",
  familyName: "",
  name1: "",
  name2: "",
  previousName1: "",
  previousName2: "",
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
  lenght: "",
  eyesColour: "",
  specialMarks: "",
  pesel: "",
  phoneNumber: "",
  email: "",
  resInPoland: "",
  resCity: "",
  resStreet: "",
  resHomeNumber: "",
  resApartmentNumber: "",
  resPostalCode: "",

  goalOfStay1: "",
  goalOfStay2: "",
  goalOfStay3: "",
  goalOfStay4: "",
  goalOfStay5: "",
  goalOfStay6: "",
  goalOfStay7: "",
  goalOfStay8: "",
  goalOfStay9: "",
  goalOfStay10: "",
  goalOfStay11: "",
  goalOfStay12: "",
  goalOfStay13: "",
  goalOfStay14: "",
  goalOfStay15: "",
  goalOfStay16: "",
  goalOfStayDesc: "",

  FirstMemberFullName: "",
  FirstMemberBirthDate: "",
  FirstMemberCitizenShip: "",
  FirstMemberResPlace: "",
  FirstMemberKinshipDegree: "",
  FirstMembersex: "",
  FirstMemberWantPermit: "",
  FirstMemberIsSupporting: "",

  SecondMemberFullName: "",
  SecondMemberBirthDate: "",
  SecondMemberCitizenShip: "",
  SecondMemberResPlace: "",
  SecondMemberKinshipDegree: "",
  SecondMembersex: "",
  SecondMemberWantPermit: "",
  SecondMemberIsSupporting: "",

  ThirdMemberFullName: "",
  ThirdMemberBirthDate: "",
  ThirdMemberCitizenShip: "",
  ThirdMemberResPlace: "",
  ThirdMemberKinshipDegree: "",
  ThirdMembersex: "",
  ThirdMemberWantPermit: "",
  ThirdMemberIsSupporting: "",

  previousStays: "",
  stayInPoland: "",
  lastDateInPoland: "",
  purposeInPoland: "",

  groundOfStay1: "",
  groundOfStay2: "",
  groundOfStay3: "",
  groundOfStay4: "",

  travelsAndStays: "",
  financialMeans: "",
  medicalInsurance: "",
  custodyInPoland: "",
  sentencedInPoland: "",
  sentencedDesc: "",
  penalInPoland: "",
  penalDesc: "",
  obligations: "",
  obligationsDesc: "",
};

const InteractiveForm = (props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    initialState
  );

  function submit() {
    console.log("Form submitted successfuly!");
  }
  return (
    <div className="gray-box forms">
      <Container>
        <Row>
          <Col xs={12}>
            <Form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col className="form-header" xs={12}>
                  <hr className="form-title-separator" />
                  <h1>{props.title}</h1>
                  <hr className="form-title-separator" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Wniosek skierowany do</Form.Label>
                    <Form.Control as="select">
                      <option>Wojewoda Dolnośląski</option>
                      <option>Wojewoda Kujawsko-Pomorski</option>
                      <option>Wojewoda Lubuski</option>
                      <option>Wojewoda Lubelski</option>
                      <option>Wojewoda Mazowiecki</option>
                      <option>Wojewoda Małopolski</option>
                      <option>Wojewoda Opolski</option>
                      <option>Wojewoda Podkarpacki</option>
                      <option>Wojewoda Podlaski</option>
                      <option>Wojewoda Warmińsko-Mazurski</option>
                      <option>Wojewoda Pomorski</option>
                      <option>Wojewoda Wielkopolski</option>
                      <option>Wojewoda Zachodniopomorski</option>
                      <option>Wojewoda Łódzki</option>
                      <option>Wojewoda Śląski</option>
                      <option>Wojewoda Świętokrzyski</option>
                    </Form.Control>
                    <Form.Text>* pole jest wymagane</Form.Text>
                  </Form.Group>
                </Col>
              </Row>
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
                        className={`${errors.surname && "input-error"}`}
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
                      <Form.Label>3. Nazwisko rodowe</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.familyName && "input-error"}`}
                        type="text"
                        name="familyName"
                        value={values.familyName}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.familyName && (
                        <p className="error-msg">{errors.familyName}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>4. Imię (imiona)</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.name1 && "input-error"}`}
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
                      <Form.Label>5. Imię (imiona) poprzednie</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="previousName1"
                        value={values.previousName1}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="previousName2"
                        value={values.previousName2}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>6. Imię ojca</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.fathersName && "input-error"}`}
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
                      <Form.Label>7. Imię matki</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.mothersName && "input-error"}`}
                        type="text"
                        name="mothersName"
                        value={values.mothersName}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.mothersName && (
                        <p className="error-msg">{errors.mothersName}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>8. Nazwisko rodowe matki</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${
                          errors.mothersMaidenName && "input-error"
                        }`}
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
                      <Form.Label>9. Data urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={6} lg={3} as={Col}>
                      <Form.Control
                        className={`${errors.birthDate && "input-error"}`}
                        name="birthDate"
                        value={values.birthDate}
                        onChange={handleChange}
                        type="date"
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.birthDate && (
                        <p className="error-msg">{errors.birthDate}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title sex" xs={12} as={Col}>
                      <Form.Label>10. Płeć</Form.Label>
                    </Form.Group>
                    <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
                      <Form.Check
                        type="radio"
                        label="Mężczyzna"
                        name="sex"
                        value="M"
                        onChange={handleChange}
                      ></Form.Check>
                    </Form.Group>
                    <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
                      <Form.Check
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
                      <Form.Label>11. Miejsce urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.birthPlace && "input-error"}`}
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
                      <Form.Label>12. Państwo urodzenia</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.birthCountry && "input-error"}`}
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
                      <Form.Label>13. Narodowość</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.nationality && "input-error"}`}
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
                      <Form.Label>14. Obywatelstwo</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.citizenShip && "input-error"}`}
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
                      <Form.Label>15. Stan cywilny</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.maritalStatus && "input-error"}`}
                        type="text"
                        name="maritalStatus"
                        value={values.maritalStatus}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.maritalStatus && (
                        <p className="error-msg">{errors.maritalStatus}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>16. Wykształcenie</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.education && "input-error"}`}
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
                      <Form.Label>17. Rysopis</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Group
                        className="filed-title"
                        s={8}
                        md={4}
                        lg={2}
                        as={Col}
                      >
                        <Form.Label>Wzrost</Form.Label>
                      </Form.Group>
                      <Form.Group s={8} md={4} lg={2} as={Col}>
                        <Form.Control
                          className={`${errors.length && "input-error"}`}
                          type="text"
                          name="length"
                          value={values.length}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>* pole jest wymagane</Form.Text>
                        {errors.lenght && (
                          <p className="error-msg">{errors.lenght}</p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="filed-title"
                        s={8}
                        md={4}
                        lg={2}
                        as={Col}
                      >
                        <Form.Label>Kolor oczu</Form.Label>
                      </Form.Group>
                      <Form.Group s={12} md={10} lg={6} as={Col}>
                        <Form.Control
                          className={`${errors.eyesColour && "input-error"}`}
                          type="text"
                          name="eyesColour"
                          value={values.eyesColour}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>* pole jest wymagane</Form.Text>
                        {errors.eyesColour && (
                          <p className="error-msg">{errors.eyesColour}</p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="filed-title"
                        s={8}
                        md={4}
                        lg={2}
                        as={Col}
                      >
                        <Form.Label>Znaki szczególne</Form.Label>
                      </Form.Group>
                      <Form.Group s={12} md={10} lg={6} as={Col}>
                        <Form.Control
                          className={`${errors.specialMarks && "input-error"}`}
                          type="text"
                          name="specialMarks"
                          value={values.specialMarks}
                          onChange={handleChange}
                        ></Form.Control>
                        <Form.Text>* pole jest wymagane</Form.Text>
                        {errors.specialMarks && (
                          <p className="error-msg">{errors.specialMarks}</p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>18. Numer PESEL</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.pesel && "input-error"}`}
                        type="text"
                        name="pesel"
                        value={values.pesel}
                        onChange={handleChange}
                      ></Form.Control>
                      <Form.Text>* pole jest wymagane</Form.Text>
                      {errors.pesel && (
                        <p className="error-msg">{errors.pesel}</p>
                      )}
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>19. Numer telefonu</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>20. Adres email</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h3>B. Miejsce pobytu cudzoziemca</h3>
                </Col>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    name="resInPoland"
                    value="X"
                    type="checkbox"
                    label="* Prosze zaznaczyć znakiem 'X', jeżeli członek rodziny przebywa na terytorium Rzeczpospolitej Polskiej"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Col xs={12}>
                  <Form.Row>
                    <Form.Group className="filed-title" xs={12} as={Col}>
                      <Form.Label>1. Województwo</Form.Label>
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
                      <Form.Label>2. Miejscowość</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.resCity && "input-error"}`}
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
                      <Form.Label>3. Ulica</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        className={`${errors.resStreet && "input-error"}`}
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
                            <Form.Label>4. Numer domu</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} s={12}>
                            <Form.Control
                              className={`${
                                errors.resHomeNumber && "input-error"
                              }`}
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
                            <Form.Label>5. Numer mieszkania</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.resApartmentNumber && "input-error"
                              }`}
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
                            <Form.Label>6. Kod pocztowy</Form.Label>
                          </Form.Group>
                          <Form.Group as={Col} xs={12}>
                            <Form.Control
                              className={`${
                                errors.resPostalCode && "input-error"
                              }`}
                              type="text"
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
                  </Form.Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h3>C. Informacje dodatkowe</h3>
                </Col>
                <Col xs={12}>
                  <h4>I. Główny cel pobytu</h4>
                </Col>
                <Col xs={12}>
                  <h4 className="warning-msg">
                    Uwaga! Należy wybrać tylko jeden cel pobytu na terytorium
                    Rzeczpospolitej Polskiej.
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="1)wykonywanie pracy"
                    value="goalOfStay1"
                    name="goalOfStay1"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="2)wykonywanie pracy w zawodzie wymagającym wysokich kwalifikacji"
                    name="goalOfStay2"
                    value="goalOfStay2"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="3)wykonywanie pracy przez cudzoziemca delegowanego przez pracodawcę zagranicznego na terytorium Rzeczpospolitej Polskiej"
                    value="goalOfStay3"
                    name="goalOfStay3"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="4)prowdzenie działalności gospodarczej"
                    name="goalOfStay4"
                    value="goalOfStay4"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="5)podjęcie lub kontynuacja stacjonarnych studiów pierwszego stopnia, studiów drugiego stopnia lub jednolitych studiów magisterskich albo kształcenie się w szkole doktorskiej"
                    name="goalOfStay5"
                    value="goalOfStay5"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="6)prowadzenie badań naukowych lub prac rozwojowych"
                    name="goalOfStay6"
                    value="goalOfStay6"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="7)mobilność długoterminowa naukowca"
                    name="goalOfStay7"
                    value="goalOfStay7"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="8)odbycie stażu"
                    name="goalOfStay8"
                    value="goalOfStay8"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="9)udział w porgramie wolontariatu europejskiego"
                    name="goalOfStay9"
                    value="goalOfStay9"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="10)pobyt z obywatelem Rzeczpospolitej Polskiej"
                    name="goalOfStay10"
                    value="goalOfStay10"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="11)pobyt z cudzoziemcem"
                    name="goalOfStay11"
                    value="goalOfStay11"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="12)mobilność długoterminowa członka rodziny naukowca"
                    name="goalOfStay12"
                    value="goalOfStay12"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="13)okoliczności związane z byciem ofiarą handlu ludźmi"
                    name="goalOfStay13"
                    value="goalOfStay13"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="14)okoliczności wymagające krótkotrwałego pobytu na terytorium Rzeczpospolitej Polskiej"
                    name="goalOfStay14"
                    value="goalOfStay14"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="15)przedłużenie pobytu na terytorium Rzeczpospolitej Polskiej ze względu na pracę sezonową"
                    name="goalOfStay15"
                    value="goalOfStay15"
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="16)inne okoliczności"
                    name="goalOfStay16"
                    value="goalOfStay16"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>*pole jest wymagane</Form.Text>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="goalOfStayDesc"
                    value={values.goalOfStayDesc}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    II. Członkowie rodziny cudzoziemca zamieszkujący na
                    terytorium Rzeczpospolitej Polskiej
                  </h4>
                </Col>
                {/* PIERWSZY CZŁONEK */}
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>1. Pierwszy członek rodziny</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Imię i nazwisko</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="firstMemberFullName"
                          value={values.firstMemberFullName}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Płeć</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Check
                          type="radio"
                          label="Mężczyzna"
                          name="firstMembersex"
                          value="M"
                          onChange={handleChange}
                        ></Form.Check>
                        <Form.Check
                          type="radio"
                          label="Kobieta"
                          name="firstMembersex"
                          value="K"
                          onChange={handleChange}
                        ></Form.Check>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Data urodzenia</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          className={`${
                            errors.FirstMemberBirthDate && "input-error"
                          } `}
                          name="FirstMemberBirthDate"
                          value={values.firstMemberBirthDate}
                          onChange={handleChange}
                          type="date"
                        ></Form.Control>
                        {errors.FirstMemberBirthDate && (
                          <p className="error-msg">
                            {errors.FirstMemberBirthDate}
                          </p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Stopień pokrewieństwa</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="firstMemberKinshipDegree"
                          value={values.firstMemberKinshipDegree}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Obywatelstwo</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="firstMemberCitizenShip"
                          value={values.firstMemberCitizenShip}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Miejsce zamieszkania</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Group className="filed-title" as={Col} xs={12}>
                          <Form.Control
                            type="text"
                            name="firstMemberResPlace"
                            value={values.firstMemberResPlace}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy ubiega się o udzielenie zezwolenia na pobyt
                          czasowy?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="firstMemberWantPermit"
                          value={values.firstMemberWantPermit}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy pozostaje na utrzymaniu cudzoziemca?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="firstMemberIsSupporting"
                          value={values.firstMemberIsSupporting}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                {/* DRUGI CZŁONEK */}
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>2. Drugi członek rodziny</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Imię i nazwisko</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="SecondMemberFullName"
                          value={values.SecondMemberFullName}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Płeć</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Check
                          type="radio"
                          label="Mężczyzna"
                          name="SecondMemberSex"
                          value="M"
                          onChange={handleChange}
                        ></Form.Check>
                        <Form.Check
                          type="radio"
                          label="Kobieta"
                          name="SecondMemberSex"
                          value="K"
                          onChange={handleChange}
                        ></Form.Check>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Data urodzenia</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          className={`${
                            errors.SecondMemberBirthDate && "input-error"
                          } `}
                          type="date"
                          name="SecondMemberBirthDate"
                          value={values.SecondMemberBirthDate}
                          onChange={handleChange}
                        ></Form.Control>
                        {errors.SecondMemberBirthDate && (
                          <p className="error-msg">
                            {errors.SecondMemberBirthDate}
                          </p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Stopień pokrewieństwa</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="SecondMemberKinshipDegree"
                          value={values.SecondMemberKinshipDegree}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Obywatelstwo</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="SecondMemberCitizenShip"
                          value={values.SecondMemberCitizenShip}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Miejsce zamieszkania</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Group className="filed-title" as={Col} xs={12}>
                          <Form.Control
                            type="text"
                            name="SecondMemberResPlace"
                            value={values.SecondMemberResPlace}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy ubiega się o udzielenie zezwolenia na pobyt
                          czasowy?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="SecondMemberWantPermit"
                          value={values.SecondMemberWantPermit}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy pozostaje na utrzymaniu cudzoziemca?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="SecondMemberIsSupporting"
                          value={values.SecondMemberIsSupporting}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                {/* TRZECI CZŁONEK */}
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>3. Trzeci członek rodziny</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Imię i nazwisko</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="ThirdMemberFullName"
                          value={values.ThirdMemberFullName}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Płeć</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Check
                          type="radio"
                          label="Mężczyzna"
                          name="ThirdMemberSex"
                          value="M"
                          onChange={handleChange}
                        ></Form.Check>
                        <Form.Check
                          type="radio"
                          label="Kobieta"
                          name="ThirdMemberSex"
                          value="K"
                          onChange={handleChange}
                        ></Form.Check>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Data urodzenia</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          className={`${
                            errors.ThirdMemberBirthDate && "input-error"
                          } `}
                          type="date"
                          name="ThirdMemberBirthDate"
                          value={values.ThirdMemberBirthDate}
                          onChange={handleChange}
                        ></Form.Control>
                        {errors.ThirdMemberBirthDate && (
                          <p className="error-msg">
                            {errors.SecondMemberBirthDate}
                          </p>
                        )}
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Stopień pokrewieństwa</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="ThirdMemberKinshipDegree"
                          value={values.ThirdMemberKinshipDegree}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Obywatelstwo</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="ThirdMemberCitizenShip"
                          value={values.ThirdMemberCitizenShip}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>Miejsce zamieszkania</Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Group className="filed-title" as={Col} xs={12}>
                          <Form.Control
                            type="text"
                            name="ThirdMemberResPlace"
                            value={values.ThirdMemberResPlace}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy ubiega się o udzielenie zezwolenia na pobyt
                          czasowy?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="ThirdMemberWantPermit"
                          value={values.ThirdMemberWantPermit}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Label>
                          Czy pozostaje na utrzymaniu cudzoziemca?
                        </Form.Label>
                      </Form.Group>
                      <Form.Group className="filed-title" as={Col} xs={12}>
                        <Form.Control
                          type="text"
                          name="ThirdMemberIsSupporting"
                          value={values.ThirdMemberIsSupporting}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    III. Pobyt cudzoziemca na terytorium Rzeczpospolitej
                    Polskiej
                  </h4>
                </Col>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>
                    a) poprzednie pobyty na terytorium Rzeczpospolitej Polskiej
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="previousStays"
                    value={values.previousStays}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>
                    b) aktualny pobyt na terytorium Rzeczpospolitej Polskiej
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group
                      className="filed-title"
                      as={Col}
                      xs={12}
                      md={6}
                      lg={3}
                    >
                      <Form.Label>
                        1. Czy przebywa Pan (Pani) na terytorium Rzeczpospolitej
                        Polskiej?
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Check
                        type="radio"
                        label="Tak"
                        id="stayInPoland1"
                        name="stayInPoland"
                        value="Y"
                        onChange={handleChange}
                      ></Form.Check>
                      <Form.Check
                        type="radio"
                        label="Nie"
                        id="stayInPoland2"
                        name="stayInPoland"
                        value="N"
                        onChange={handleChange}
                      ></Form.Check>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group
                      className="filed-title"
                      as={Col}
                      xs={12}
                      md={6}
                      lg={3}
                    >
                      <Form.Label>
                        2. Proszę podać datę ostatniego wjazdu Pana (Pani) na
                        terytorium Rzeczpospolitej Polskiej
                      </Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} xs={12} md={6} lg={3}>
                      <Form.Control
                        className={`${
                          errors.lastDateInPoland && "input-error"
                        }`}
                        name="lastDateInPoland"
                        value={values.lastDateInPoland}
                        onChange={handleChange}
                        type="date"
                      ></Form.Control>
                      {errors.lastDateInPoland && (
                        <p className="error-msg">{errors.lastDateInPoland}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Row>
                    <Form.Group className="filed-title" as={Col} xs={12}>
                      <Form.Label>3. W jakim celu?</Form.Label>
                    </Form.Group>
                    <Form.Group s={12} md={10} lg={6} as={Col}>
                      <Form.Control
                        type="text"
                        name="purposeInPoland"
                        value={values.purposeInPoland}
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>4. Na jakiej podstawie?</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="1)ruchu bezwizowego"
                    name="groundOfStay1"
                    value={values.groundOfStay1}
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="2)wizy"
                    name="groundOfStay2"
                    value={values.groundOfStay2}
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="3)zezwolenia na pobyt czasowy"
                    name="groundOfStay3"
                    value={values.groundOfStay3}
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Check
                    type="checkbox"
                    label="4)dokumentu uprawniającego do wjazdu i pobytu wydanego przez inne państwo obszaru Schengen"
                    name="groundOfStay4"
                    value={values.groundOfStay4}
                    onChange={handleChange}
                  ></Form.Check>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    IV. Podróże i pobyty zagraniczne cudzoziemca poza terytorium
                    Rzeczpospolitej Polskiej w okresie 5 lat (państwo, okres
                    pobytu)
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="travelsAndStays"
                    value={values.travelsAndStays}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    V. Informacje o środkach finansowych na pokrycie kosztów
                    utrzymania cudzoziemca
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="financialMeans"
                    value={values.financialMeans}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    VI. Informacja o posiadanym przez cudzoziemca ubezpieczeniu
                    zdrowotnym
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="medicalInsurance"
                    value={values.medicalInsurance}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    VII. Czy jest Pan (Pani) zatrzymany (-na), umieszczony (-na)
                    w strzeżonym ośrodku lub w areszcie dla cudzoziemców lub czy
                    został wobec Pana (Pani) zastosowany środek zapobiegawczy w
                    postaci zakazu opuszczania kraju lub odbywa Pan (Pani) karę
                    pozbawienia wolności lub zastosowano wobec Pani (Pana)
                    tymczasowe aresztowanie?
                  </h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    name="custodyInPoland"
                    value={values.custodyInPoland}
                    onChange={handleChange}
                  ></Form.Control>
                  {errors.custodyInPoland && (
                    <p className="error-msg">{errors.custodyInPoland}</p>
                  )}
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    VIII. Czy był(a) Pan (Pani) karany (-na) sądownie na
                    terytorium Rzeczypospolitej Polskiej?
                  </h4>
                </Col>
                <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
                  <Form.Check
                    type="radio"
                    label="Tak"
                    id="sentencedInPoland1"
                    name="sentencedInPoland"
                    value="Y"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Nie"
                    id="sentencedInPoland2"
                    name="sentencedInPoland"
                    value="N"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.sentencedInPoland && (
                    <p className="error-msg">{errors.sentencedInPoland}</p>
                  )}
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>
                    Kiedy, za jaki czyn, jaki zapadł wyrok i czy został
                    wykonany?
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    name="sentencedDesc"
                    value={values.sentencedDesc}
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    IX. Czy toczy się przeciwko Panu (Pani) postępowanie karne
                    lub postępowanie w sprawach o wykroczenia na terytorium
                    Rzeczypospolitej Polskiej?
                  </h4>
                </Col>
                <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
                  <Form.Check
                    type="radio"
                    label="Tak"
                    value="Y"
                    id="penalInPolan1"
                    name="penalInPoland"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Nie"
                    value="N"
                    id="penalInPolan2"
                    name="penalInPoland"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.penalInPoland && (
                    <p className="error-msg">{errors.penalInPoland}</p>
                  )}
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Jakie?</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    rows={7}
                    name="penalDesc"
                    value={values.penalDesc}
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                <Col xs={12}>
                  <h4>
                    X. Czy ciążą na Panu (Pani) zobowiązania wynikające z
                    orzeczeń sądowych, postanowień i decyzji administracyjnych,
                    w tym zobowiązania alimentacyjne, na terytorium
                    Rzeczpospolitej Polskiej lub poza tym terytorium?
                  </h4>
                </Col>
                <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
                  <Form.Check
                    type="radio"
                    label="Tak"
                    name="obligations"
                    id="obligations1"
                    value="Y"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Check
                    type="radio"
                    label="Nie"
                    name="obligations"
                    id="obligations2"
                    value="N"
                    onChange={handleChange}
                  ></Form.Check>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.obligations && (
                    <p className="error-msg">{errors.obligations}</p>
                  )}
                </Form.Group>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Jakie?</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="obligationsDesc"
                    value={values.obligationsDesc}
                    onChange={handleChange}
                    rows={7}
                  ></Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Col xs={12}>
                  <h4>Załączniki do wniosku</h4>
                </Col>
                <Form.Group as={Col} xs={12} md={10} lg={6}>
                  <Form.Control
                    as="textarea"
                    name="annexes"
                    rows={7}
                  ></Form.Control>
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
