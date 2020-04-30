function validatePostalCode(postal_code) {
  const reg = /^[0-9]{2}(?:-[0-9]{3})?$/;
  if (!reg.test(postal_code)) return false;
  else return true;
}
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
  const wrong_number_values_error = "Podaj poprawną wartość";
  const today = new Date();
  const input_birthDate = new Date(values.birthDate);
  const input_lastDateInPoland = new Date(values.lastDateInPoland);
  const input_FirstMemberBirthDate = new Date(values.FirstMemberBirthDate);
  const input_SecondMemberBirthDate = new Date(values.SecondMemberBirthDate);
  const input_ThirdMemberBirthDate = new Date(values.ThirdMemberBirthDate);

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
  if (!validatePostalCode(values.resPostalCode)) {
    errors.resPostalCode = wrong_postalcode_error;
  }
  if (input_FirstMemberBirthDate >= today) {
    errors.FirstMemberBirthDate = wrong_date_error;
  }
  if (!values.FirstMemberBirthDate) {
    errors.FirstMemberBirthDate = "";
  }
  if (input_SecondMemberBirthDate >= today) {
    errors.SecondMemberBirthDate = wrong_date_error;
  }
  if (!values.SecondMemberBirthDate) {
    errors.SecondMemberBirthDate = "";
  }
  if (input_ThirdMemberBirthDate >= today) {
    errors.ThirdMemberBirthDate = wrong_date_error;
  }
  if (!values.ThirdMemberBirthDate) {
    errors.ThirdMemberBirthDate = "";
  }
  if (input_lastDateInPoland >= today) {
    errors.lastDateInPoland = wrong_date_error;
  }
  if (!values.lastDateInPoland) {
    errors.lastDateInPoland = "";
  }
  if (!validateLength(values.length)) {
    errors.length = wrong_number_values_error;
  }
  if (!values.length) {
    errors.length = empty_field_error;
  }
  if (values.pesel) {
    if (!validatePESEL(values.pesel)) {
      errors.pesel = "Prodaj poprawny numer PESEL";
    }
  }
  if (!validateNumbers(values.resHomeNumber)) {
    errors.resHomeNumber = wrong_number_values_error;
  }
  if (!validateNumbers(values.resApartmentNumber)) {
    errors.resApartmentNumber = wrong_number_values_error;
  }

  return errors;
}
