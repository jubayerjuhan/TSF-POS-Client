import { InputFieldType } from "./types";
import Form from "react-bootstrap/Form";
import "./inputField.scss";

const InputField = ({
  type,
  placeholder,
  name,
  error,
  register,
  label,
  defaultValue,
  className,
}: InputFieldType) => {
  return (
    <div className={`input__wrapper ${className}`}>
      <p className="top__label mb-2">{label}</p>
      <Form.Control
        onWheel={(e) => e.preventDefault()}
        defaultValue={defaultValue}
        type={type}
        className="form-control core__inputField"
        aria-describedby="emailHelp"
        placeholder={placeholder}
        name={name}
        {...register(name)}
      />
      {error && <p className="error__message">{error}</p>}
    </div>
  );
};

export default InputField;
