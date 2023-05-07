import logo from "../../assets/sisters_furniture_logo.jpeg";
import InputField from "../../components/core/InputField/InputField";
import Button from "../../components/core/Button/Button";
import RESET_PASSWORD_FIELDS from "../../constants/InputFields/resetPassword";
import { useForm } from "react-hook-form";
import { ResetPasswordFormTypes } from "./types";
import "./resetPassword.scss";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="reset-password">
      <img src={logo} alt="" className="logo" />
      <div className="reset-password__credentials-card">
        <h4 className="reset-password__title">Reset Password</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="reset-password_form">
          {RESET_PASSWORD_FIELDS.map((field, index) => (
            <InputField
              register={register}
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              error={
                errors[field.name as keyof ResetPasswordFormTypes]?.message
              }
            />
          ))}
          <Button
            title="Reset Password"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
