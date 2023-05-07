import { InputFieldType } from "./types";
import Form from "react-bootstrap/Form";
import "./inputField.scss";

const InputField = ({
  type,
  placeholder,
  name,
  error,
  register,
}: InputFieldType) => {
  return (
    <div className="input__wrapper">
      <Form.Control
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
