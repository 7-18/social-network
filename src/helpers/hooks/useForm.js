import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [formValues, handleChange, reset];
};
