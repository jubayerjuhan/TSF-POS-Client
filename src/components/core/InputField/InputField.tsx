import { InputFieldType } from "./types";
import "./inputField.scss";

const InputField = ({ type, placeholder }: InputFieldType) => {
  return (
    <input
      type={type}
      className="form-control core__inputField"
      aria-describedby="emailHelp"
      placeholder={placeholder}
    />
  );
};

export default InputField;
