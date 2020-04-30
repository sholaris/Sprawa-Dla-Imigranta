import { useState } from "react";

const useForm = (callback, validate, initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    callback();
  };
  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
