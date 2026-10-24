import { useState } from 'react';

/**
 * State form terkontrol + validasi, dipakai bersama oleh RegisterForm dan LoginForm.
 *
 * @param {Record<string, string>} initialValues
 * @param {(values: Record<string, string>) => Record<string, string>} validate
 *        Mengembalikan objek error; kosong berarti valid.
 */
export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Hapus error field saat pengguna mulai memperbaikinya.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  /** Bungkus handler submit: jalankan `onValid` hanya bila semua field valid. */
  const handleSubmit = (onValid) => (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const [firstInvalidField] = Object.keys(validationErrors);
    if (firstInvalidField) {
      event.currentTarget.elements.namedItem(firstInvalidField)?.focus();
      return;
    }
    onValid(values);
  };

  /** Props standar untuk satu field: <FormField {...getFieldProps('email')} />. */
  const getFieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name],
  });

  return { values, errors, handleChange, handleSubmit, getFieldProps };
}
