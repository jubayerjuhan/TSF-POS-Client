// import core file and package

// import file from folder
import logo from "../../assets/sisters_furniture_logo.jpeg";
import Button from "../../components/core/Button/Button";
import InputField from "../../components/core/InputField/InputField";
import LOGIN_INPUT_FIELDS from "../../constants/InputFields/login";

import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" className="logo" />
      <div className="login__credentials-card">
        <h4 className="login__title">Login Here</h4>
        {LOGIN_INPUT_FIELDS.map((field, index) => (
          <InputField
            key={index}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
          />
        ))}
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Login;
