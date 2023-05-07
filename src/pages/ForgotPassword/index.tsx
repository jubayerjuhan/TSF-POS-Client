import { useForm } from "react-hook-form";
import logo from "../../assets/sisters_furniture_logo.jpeg";
import FORGOT_PASSWORD_FIELDS from "../../constants/InputFields/forgotPassword";
import InputField from "../../components/core/InputField/InputField";
import { ForgotPasswordData } from "./types";
import Button from "../../components/core/Button/Button";
import "./forgotPassword.scss";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="forgot-password">
      <img src={logo} alt="" className="logo" />
      <div className="forgot-password__credentials-card">
        <h4 className="forgot-password__title">Forgot Password</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="forgot-password_form"
        >
          {FORGOT_PASSWORD_FIELDS.map((field, index) => (
            <InputField
              register={register}
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              error={errors[field.name as keyof ForgotPasswordData]?.message}
            />
          ))}
          <Button
            title="Forgot Password"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
