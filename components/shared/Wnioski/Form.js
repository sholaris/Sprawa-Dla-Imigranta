import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useForm from "./useForm";
import validate from "../Walidacja/validateForm";
import FormHeader from "./FormHeader";
import AuthoritySelection from "./AuthhoritySelection";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionF from "./SectionF";
import Annexes from "./Annexes";
import ButtonPDF from "./ButtonGenPDF";

const initialState = {
  surname: "",
  familyName: "",
  name1: "",
  fathersName: "",
  motherName: "",
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
  spouseSurname: "",
  spousesName1: "",
  spouseBirthDate: "",
  spouseSex: "",
  spouseCitizenShip: "",
  spouseCity: "",
  spouseStreet: "",
  spouseHomeNumber: "",
  spouseApartmentNumber: "",
  spousePostalCode: "",
  spouseCountry: "",
  lastDateInPoland: "",
  visaIssueDate: "",
  visaExpiryDate: "",
  decisionIssueDate: "",
  resCardIssueDate: "",
  resCardExpiryDate: "",
  custodyInPoland: "",
  sentencedInPoland: "",
  sentencedDesc: "",
  penalInPoland: "",
  penalDesc: "",
  complyWithFiscus: "",
  justification: "",
};

const SectionD = ({ values, errors, handleChange }) => {
  return (
    <Row>
      <Col xs={12}>
        <h3>D. Informacje dodatkowe</h3>
      </Col>
      <Col xs={12}>
        <h4>I. Dane dotyczące małżonka</h4>
      </Col>
      <Col xs={12}>
        <Form.Row>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>1. Nazwisko</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseSurname"
              value={values.spouseSurname}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>2. Imię (imiona)</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseName1"
              value={values.spousesName1}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseName2"
              value={values.spousesName2}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>3. Imię (imiona) poprzednie</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spousePreviousName1"
              value={values.spousesPreviousName1}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spousePreviousName2"
              value={values.spousesPreviousName2}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>4. Nazwisko(a) poprzednie</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spousePreviousSurname1"
              value={values.spousesPreviousSurname1}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spousePreviousSurname2"
              value={values.spousesPreviousSurname2}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>5. Data urodzenia</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={6} lg={3} as={Col}>
            <Form.Control
              className={`${errors.spouseBirthDate && "input-error"} `}
              type="date"
              name="spouseBirthDate"
              value={values.spouseBirthDate}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
            {errors.spouseBirthDate && (
              <p className="error-msg">{errors.spouseBirthDate}</p>
            )}
          </Form.Group>
          <Form.Group className="filed-title sex" xs={12} as={Col}>
            <Form.Label>6. Płeć</Form.Label>
          </Form.Group>
          <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
            <Form.Check
              type="radio"
              label="Mężczyzna"
              name="spouseSex"
              values="M"
              onChange={handleChange}
            ></Form.Check>
          </Form.Group>
          <Form.Group className="sex" s={12} md={6} lg={4} as={Col}>
            <Form.Check
              type="radio"
              label="Kobieta"
              name="spouseSex"
              values="K"
              onChange={handleChange}
            ></Form.Check>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>7. Obywatelstwo</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseCitizenShip"
              value={values.spouseCitizenShip}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>8. Miejsce zamieszkania</Form.Label>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>Miasto</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseCity"
              value={values.spouseCity}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>Ulica</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseStreet"
              value={values.spouseStreet}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
          <Form.Group className="three-inputs" as={Col} s={12} lg={10}>
            <Form.Row>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} xs={12}>
                  <Form.Label>Numer domu</Form.Label>
                </Form.Group>
                <Form.Group as={Col} s={12}>
                  <Form.Control
                    className={`${errors.spouseHomeNumber && "error-input"}`}
                    type="text"
                    name="spouseHomeNumber"
                    value={values.spouseHomeNumber}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.spouseHomeNumber && (
                    <p className="error-msg">{errors.spouseHomeNumber}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} s={12}>
                  <Form.Label>Numer mieszkania</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${
                      errors.spouseApartmentNumber && "error-input"
                    }`}
                    type="text"
                    name="spouseApartmentNumber"
                    value={values.spouseApartmentNumber}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.spouseApartmentNumber && (
                    <p className="error-msg">{errors.spouseApartmentNumber}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <Form.Group as={Col} s={12} md={6} lg={3}>
                <Form.Group className="filed-title" as={Col} s={12}>
                  <Form.Label>Kod pocztowy</Form.Label>
                </Form.Group>
                <Form.Group as={Col} xs={12}>
                  <Form.Control
                    className={`${errors.spousePostalCode && "error-input"}`}
                    type="text"
                    maxLength={6}
                    placeholder="nn-nnn"
                    name="spousePostalCode"
                    value={values.spousePostalCode}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Text>* pole jest wymagane</Form.Text>
                  {errors.spousePostalCode && (
                    <p className="error-msg">{errors.spousePostalCode}</p>
                  )}
                </Form.Group>
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <Form.Group className="filed-title" xs={12} as={Col}>
            <Form.Label>Państwo</Form.Label>
          </Form.Group>
          <Form.Group s={12} md={10} lg={6} as={Col}>
            <Form.Control
              type="text"
              name="spouseCountry"
              value={values.spouseCountry}
              onChange={handleChange}
            ></Form.Control>
            <Form.Text>* pole jest wymagane</Form.Text>
          </Form.Group>
        </Form.Row>
      </Col>
      <Col xs={12}>
        <h4>II. Pobyt cudzoziemca na terytorium Rzeczpospolitej Polskiej</h4>
      </Col>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>
          a) poprzednie pobyty na terytorium Rzeczpospolitej Polskiej
        </Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={12} md={10} lg={6}>
        <Form.Control
          as="textarea"
          rows={7}
          name="previousStays"
          value={values.previousStays}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>
          b) aktualny pobyt na terytorium Rzeczpospolitej Polskiej
        </Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Row>
          <Form.Group className="filed-title" as={Col} xs={12} md={6} lg={3}>
            <Form.Label>
              1. Czy przebywa Pan (Pani) na terytorium Rzeczpospolitej Polskiej?
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3}>
            <Form.Check
              type="radio"
              label="Tak"
              value="Y"
              id="stayInPoland1"
              name="stayInPoland"
              value={values.stayInPoland}
              onChange={handleChange}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Nie"
              value="N"
              id="stayInPoland2"
              name="stayInPoland"
              value={values.stayInPoland}
              onChange={handleChange}
            ></Form.Check>
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Row>
          <Form.Group className="filed-title" as={Col} xs={12} md={6} lg={3}>
            <Form.Label>
              2. Proszę podać datę ostatniego wjazdu Pana (Pani) na terytorium
              Rzeczpospolitej Polskiej
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3}>
            <Form.Control
              className={`${errors.lastDateInPoland && "input-error"}`}
              type="date"
              name="lastDateInPoland"
              value={values.lastDateInPoland}
              onChange={handleChange}
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
          label="4)statusu uchodźcy, ochrony międzynarodowej, zgody na pobyt ze względów humanitarnych"
          name="groundOfStay4"
          value={values.groundOfStay4}
          onChange={handleChange}
        ></Form.Check>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Check
          type="checkbox"
          label="5)zgody na pobyt tolerowany"
          name="groundOfStay5"
          value={values.groundOfStay5}
          onChange={handleChange}
        ></Form.Check>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Check
          type="checkbox"
          label="6)azylu"
          name="groundOfStay6"
          value={values.groundOfStay6}
          onChange={handleChange}
        ></Form.Check>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Check
          type="checkbox"
          label="7)dokumentu uprawniającego do wjazdu i pobytu wydanego przez inne państwo obszaru Schengen"
          name="groundOfStay7"
          value={values.groundOfStay7}
          onChange={handleChange}
        ></Form.Check>
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>Typ wizy</Form.Label>
      </Form.Group>
      <Form.Group s={12} md={10} lg={6} as={Col}>
        <Form.Control
          type="text"
          name="typeOfVisa"
          value={values.typeOfVisa}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Row>
          <Form.Group as={Col} xs={8} md={4} lg={2}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Seria wizy</Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                type="text"
                name="visaSerie"
                value={values.visaSerie}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={10} lg={4}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Numer wizy</Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                type="text"
                name="visaNumber"
                value={values.visaNumber}
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
              <Form.Label>Data wydania wizy</Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                className={`${errors.visaIssueDate && "input-error"}`}
                type="date"
                name="visaIssueDate"
                value={values.visaIssueDate}
                onChange={handleChange}
              ></Form.Control>
              {errors.visaIssueDate && (
                <p className="error-msg">{errors.visaIssueDate}</p>
              )}
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Data upływu ważności wizy</Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                className={`${errors.visaExpiryDate && "input-error"}`}
                type="date"
                name="visaExpiryDate"
                value={values.visaExpiryDate}
                onChange={handleChange}
              ></Form.Control>
              {errors.visaExpiryDate && (
                <p className="error-msg">{errors.visaExpiryDate}</p>
              )}
            </Form.Group>
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Row>
          <Form.Group as={Col} xs={8} md={4} lg={2}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Okres pobytu</Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                type="text"
                maxLength={3}
                name="periodOfStay"
                value={values.periodOfStay}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={4}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>
                Organ wydający dokument <br />
                wizy
              </Form.Label>
            </Form.Group>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Control
                type="text"
                name="visaAuthority"
                value={values.visaAuthority}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form.Group>
        </Form.Row>
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>Organ wydający decyzję</Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={12} md={10} lg={6}>
        <Form.Control
          type="text"
          name="decisionAuthority"
          value={values.decisionAuthority}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>Data wydania decyzji</Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={12} md={6} lg={3}>
        <Form.Control
          className={`${errors.decisionIssueDate && "input-error"}`}
          type="date"
          name="decisionIssueDate"
          value={values.decisionIssueDate}
          onChange={handleChange}
        ></Form.Control>
        {errors.decisionIssueDate && (
          <p className="error-msg">{errors.decisionIssueDate}</p>
        )}
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>
          Karta pobytu lub dokument uprawniający do wjazdu i pobytu
        </Form.Label>
      </Form.Group>
      <Form.Group as={Col} xs={12}>
        <Form.Row>
          <Form.Group as={Col} xs={8} md={4} lg={2}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Seria dokumentu</Form.Label>
              <Form.Control
                type="text"
                name="resCardSerie"
                value={values.resCardSerie}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={10} lg={4}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Numer dokumentu</Form.Label>
              <Form.Control
                type="text"
                name="resCardNumber"
                value={values.resCardNumber}
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
              <Form.Label>
                Data wydania <br />
                dokumentu
              </Form.Label>
              <Form.Control
                className={`${errors.resCardIssueDate && "input-error"}`}
                type="date"
                name="resCardIssueDate"
                value={values.resCardIssueDate}
                onChange={handleChange}
              ></Form.Control>
              {errors.resCardIssueDate && (
                <p className="error-msg">{errors.resCardIssueDate}</p>
              )}
            </Form.Group>
          </Form.Group>
          <Form.Group as={Col} xs={12} md={6} lg={3}>
            <Form.Group className="filed-title" as={Col} xs={12}>
              <Form.Label>Data upływu ważności dokumentu</Form.Label>
              <Form.Control
                className={`${errors.resCardExpiryDate && "input-error"}`}
                type="date"
                name="resCardExpiryDate"
                value={values.resCardExpiryDate}
                onChange={handleChange}
              ></Form.Control>
              {errors.resCardExpiryDate && (
                <p className="error-msg">{errors.resCardExpiryDate}</p>
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
          type="text"
          name="resCardAuthority"
          value={values.resCardAuthority}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Col xs={12}>
        <h4>
          III. Podróże cudzoziemca i pobyty zagraniczne poza terytorium
          Rzeczpospolitej Polskiej w okresie ostatnich 5 lat (państwo, okres
          pobytu)
        </h4>
      </Col>
      <Form.Group as={Col} xs={12} md={10} lg={6}>
        <Form.Control
          as="textarea"
          rows={7}
          name="travelsAndStays"
          value={values.travelsAndStays}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Col xs={12}>
        <h4>
          IV. Czy jest Pan (Pani) zatrzymany (-na), umieszczony (-na) w
          strzeżonym ośrodku lub w areszcie dla cudzoziemców lub czy został
          wobec Pana (Pani) zastosowany środek zapobiegawczy w postaci zakazu
          opuszczania kraju lub odbywa Pan (Pani) karę pozbawienia wolności lub
          zastosowano wobec Pani (Pana) tymczasowe aresztowanie?
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
        <Form.Text>* pole jest wymagane</Form.Text>
        {errors.custodyInPoland && (
          <p className="error-msg">{errors.custodyInPoland}</p>
        )}
      </Form.Group>
      <Col xs={12}>
        <h4>
          V. Czy był(a) Pan (Pani) karany (-na) sądownie na terytorium
          Rzeczypospolitej Polskiej?
        </h4>
      </Col>
      <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
        <Form.Check
          type="radio"
          label="Tak"
          value="Y"
          id="sentencedInPoland1"
          name="sentencedInPoland"
          value={values.sentencedInPoland}
          onChange={handleChange}
        ></Form.Check>
        <Form.Check
          type="radio"
          label="Nie"
          value="N"
          id="sentencedInPoland2"
          name="sentencedInPoland"
          value={values.sentencedInPoland}
          onChange={handleChange}
        ></Form.Check>
        <Form.Text>* pole jest wymagane</Form.Text>
        {errors.sentencedDesc && (
          <p className="error-msg">{errors.sentencedDesc}</p>
        )}
      </Form.Group>
      <Form.Group className="filed-title" as={Col} xs={12}>
        <Form.Label>
          Kiedy, za jaki czyn, jaki zapadł wyrok i czy został wykonany?
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
          VI. Czy toczy się przeciwko Panu (Pani) postępowanie karne lub
          postępowanie w sprawach o wykroczenia na terytorium Rzeczypospolitej
          Polskiej?
        </h4>
      </Col>
      <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
        <Form.Check
          type="radio"
          label="Tak"
          value="Y"
          id="penalInPolan1"
          name="penalInPoland"
          value={values.penalInPoland}
          onChange={handleChange}
        ></Form.Check>
        <Form.Check
          type="radio"
          label="Nie"
          value="N"
          id="penalInPolan2"
          name="penalInPoland"
          value={values.penalInPoland}
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
          VII. Czy wywiązuje się Pan (Pani) z zobowiązań podatkowych wobec
          Skarbu Państwa?
        </h4>
      </Col>
      <Form.Group className="sex" s={12} md={6} lg={3} as={Col}>
        <Form.Check
          type="radio"
          label="Tak"
          value="Y"
          id="complyWithFiscal1"
          name="complyWithFiscal"
          value={values.complyWithFiscus}
          onChange={handleChange}
        ></Form.Check>
        <Form.Check
          type="radio"
          label="Nie"
          value="N"
          id="complyWithFiscal2"
          name="complyWithFiscal"
          value={values.complyWithFiscus}
          onChange={handleChange}
        ></Form.Check>
        <Form.Text>* pole jest wymagane</Form.Text>
        {errors.complyWithFiscus && (
          <p className="error-msg">{errors.complyWithFiscus}</p>
        )}
      </Form.Group>
    </Row>
  );
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
              <FormHeader title={props.title} />
              <AuthoritySelection />
              <SectionA
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
              <SectionB
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
              <SectionC
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
              <SectionD
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
              <SectionF
                values={values}
                errors={errors}
                handleChange={handleChange}
              />
              <Annexes />
              <ButtonPDF />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InteractiveForm;
