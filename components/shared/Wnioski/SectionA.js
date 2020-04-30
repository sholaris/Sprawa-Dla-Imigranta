import { Row, Col, Form } from "react-bootstrap";

const SectionA = ({ values, errors, handleChange }) => {
  return (
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
            {errors.surname && <p className="error-msg">{errors.surname}</p>}
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
              className={`${errors.familyName && "input-error"} `}
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
              className={`${errors.name1 && "input-error"} `}
              type="text"
              name="name1"
              value={values.name1}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.name1 && <p className="error-msg">{errors.name1}</p>}
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
            <Form.Label>7. Imię matki</Form.Label>
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
            <Form.Label>8. Nazwisko rodowe matki</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.mothersMaidenName && "input-error"} `}
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
            <Form.Label>10. Płeć</Form.Label>
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
            <Form.Label>11. Miejsce urodzenia</Form.Label>
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
            <Form.Label>12. Państwo urodzenia</Form.Label>
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
            <Form.Label>13. Narodowość</Form.Label>
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
            <Form.Label>14. Obywatelstwo</Form.Label>
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
            <Form.Label>15. Stan cywilny</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.maritalStatus && "input-error"} `}
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
            <Form.Label>17. Zawód wykonywany</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.practisedProffesion && "input-error"} `}
              type="text"
              name="practisedProfession"
              value={values.practisedProffesion}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.practisedProffesion && (
              <p className="error-msg">{errors.practisedProffesion}</p>
            )}
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>18. Rysopis</Form.Label>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Group className="filed-title" s={8} md={4} lg={2} as={Col}>
              <Form.Label>Wzrost</Form.Label>
            </Form.Group>
            <Form.Group s={8} md={4} lg={2} as={Col}>
              <Form.Control
                className={`${errors.length && "input-error"} `}
                type="text"
                maxLength={3}
                name="length"
                value={values.length}
                onChange={handleChange}
              ></Form.Control>
              <Form.Text>* pole jest wymagane</Form.Text>
              {errors.length && <p className="error-msg">{errors.length}</p>}
            </Form.Group>
            <Form.Group className="filed-title" s={8} md={4} lg={2} as={Col}>
              <Form.Label>Kolor oczu</Form.Label>
            </Form.Group>
            <Form.Group s={12} md={10} lg={6} as={Col}>
              <Form.Control
                className={`${errors.eyesColour && "input-error"} `}
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
            <Form.Group className="filed-title" s={8} md={4} lg={2} as={Col}>
              <Form.Label>Znaki szczególne</Form.Label>
            </Form.Group>
            <Form.Group s={12} md={10} lg={6} as={Col}>
              <Form.Control
                className={`${errors.specialMarks && "input-error"} `}
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
            <Form.Label>19. Numer PESEL (jeśli został nadany)</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              className={`${errors.pesel && "input-error"} `}
              type="text"
              maxLength={11}
              name="pesel"
              value={values.pesel}
              onChange={handleChange}
            ></Form.Control>
            {errors.pesel && <p className="error-msg">{errors.pesel}</p>}
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>20. Numer telefonu</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
      </Col>
    </Row>
  );
};

export default SectionA;
