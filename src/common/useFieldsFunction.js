import { useState, useCallback } from "react";

const useFormField = (data = "") => {
  const [value, setValue] = useState(data);
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

export default useFormField;