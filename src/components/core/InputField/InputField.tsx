import { InputFieldType } from "./types";
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
      <input
        type={type}
        className="form-control core__inputField"
        aria-describedby="emailHelp"
        placeholder={placeholder}
        name={name}
        {...register(name)}
      />
      <p className="error__message">{error}</p>
    </div>
  );
};

export default InputField;
