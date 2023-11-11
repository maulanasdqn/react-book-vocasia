import { useState } from "react";

export const useLocalStorage = (key, initialValue = null) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const deleteValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { value, updateValue, deleteValue };
};
