function validatePESEL(pesel) {
  const reg = /^[0-9]{11}$/;
  if (reg.test(pesel) == false) return false;
  else {
    var digits = ("" + pesel).split("");
    if (
      parseInt(pesel.substring(4, 6)) > 31 ||
      parseInt(pesel.substring(2, 4)) > 12
    ) {
      return false;
    }
    var checksum =
      (1 * parseInt(digits[0]) +
        3 * parseInt(digits[1]) +
        7 * parseInt(digits[2]) +
        9 * parseInt(digits[3]) +
        1 * parseInt(digits[4]) +
        3 * parseInt(digits[5]) +
        7 * parseInt(digits[6]) +
        9 * parseInt(digits[7]) +
        1 * parseInt(digits[8]) +
        3 * parseInt(digits[9])) %
      10;
    if (checksum == 0) checksum = 10;
    checksum = 10 - checksum;
    return parseInt(digits[10]) == checksum;
  }
}

function validateLength(length) {
  var reg = /^[0-9]{3}$/;
  if (!reg.test(length)) return false;
  else if (parseInt(length) > 251) return false;
  else return true;
}
function validateNumbers(data) {
  var reg = /^[0-9-]*$/;
  if (!reg.test(data)) return false;
  else return true;
}

export default function validate(values) {
  let errors = {};
  const empty_field_error = "Pole nie może być puste";
  const wrong_date_error = "Podaj datę z przeszłości";
  const wrong_postalcode_error = "Podaj kod pocztowy w formacie nn-nnn";
  const input_birthDate = new Date(values.birthDate);
  const input_docIssueDate = new Date(values.docIssueDate);
  const input_docExpiryDate = new Date(values.docExpiryDate);
  const input_visaIssueDate = new Date(values.visaIssueDate);
  const input_visaExpiryDate = new Date(values.visaExpiryDate);
  const input_resCardIssueDate = new Date(values.resCardIssueDate);
  const input_resCardExpiryDate = new Date(values.resCardExpiryDate);
  const input_spouseBirthDate = new Date(values.spouseBirthDate);
  const input_lastDateInPoland = new Date(values.lastDateInPoland);
  const input_decisionIssueDate = new Date(values.decisionIssueDate);
  const today = new Date();
  const regexp = /^[0-9]{2}(?:-[0-9]{3})?$/;

  for (var key in values) {
    if (values.hasOwnProperty(key)) {
      if (!values[key]) {
        errors[key] = empty_field_error;
      }
    }
  }
  if (input_birthDate >= today) {
    errors.birthDate = wrong_date_error;
  }
  if (input_docIssueDate >= today) {
    errors.docIssueDate = wrong_date_error;
  }
  if (input_docExpiryDate >= today) {
    errors.docExpiryDate = wrong_date_error;
  }
  if (!validateLength(values.length)) {
    errors.length = "Podaj poprawną wartość";
  }
  if (!values.length) {
    errors.length = empty_field_error;
  }
  if (values.pesel) {
    if (!validatePESEL(values.pesel)) {
      errors.pesel = "Prodaj poprawny numer PESEL";
    }
  }
  if (!values.pesel) {
    errors.pesel = "";
  }
  if (!regexp.test(values.resPostalCode)) {
    errors.resPostalCode = wrong_postalcode_error;
  }
  if (!validateNumbers(values.resHomeNumber)) {
    errors.resHomeNumber = "Podaj poprawną wartość";
  }
  if (!validateNumbers(values.resApartmentNumber)) {
    errors.resApartmentNumber = "Podaj poprawną wartość";
  }
  if (!values.spouseBirthDate) {
    errors.spouseBirthDate = "";
  }
  if (values.spouseBirthDate && input_spouseBirthDate >= today) {
    errors.spouseBirthDate = wrong_date_error;
  }
  if (!validateNumbers(values.spouseHomeNumber)) {
    errors.spouseHomeNumber = "Podaj poprawną wartość";
  }
  if (!values.spouseHomeNumber) {
    errors.spouseHomeNumber = "";
  }
  if (!validateNumbers(values.spouseApartmentNumber)) {
    errors.spouseApartmentNumber = "Podaj poprawną wartość";
  }
  if (!values.spouseApartmentNumber) {
    errors.spouseApartmentNumber = "";
  }
  if (!regexp.test(values.spousePostalCode)) {
    errors.spousePostalCode = wrong_postalcode_error;
  }
  if (!values.spousePostalCode) {
    errors.spousePostalCode = "";
  }
  if (input_visaIssueDate >= today) {
    errors.visaIssueDate = wrong_date_error;
  }
  if (!values.visaIssueDate) {
    errors.visaIssueDate = "";
  }
  if (input_visaExpiryDate >= today) {
    errors.visaExpiryDate = wrong_date_error;
  }
  if (!values.visaExpiryDate) {
    errors.visaExpiryDate = "";
  }
  if (input_lastDateInPoland >= today) {
    errors.lastDateInPoland = wrong_date_error;
  }
  if (!values.lastDateInPoland) {
    errors.lastDateInPoland = "";
  }
  if (input_resCardIssueDate >= today) {
    errors.resCardIssueDate = wrong_date_error;
  }
  if (!values.resCardIssueDate) {
    errors.resCardIssueDate = "";
  }
  if (input_resCardExpiryDate >= today) {
    errors.resCardExpiryDate = wrong_date_error;
  }
  if (!values.resCardExpiryDate) {
    errors.resCardExpiryDate = "";
  }
  if (input_decisionIssueDate >= today) {
    errors.decisionIssueDate = wrong_date_error;
  }
  if (!values.decisionIssueDate) {
    errors.decisionIssueDate = "";
  }

  return errors;
}
