import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import LOGIN_INPUT_FIELDS from "../../constants/InputFields/login";
import logo from "../../assets/sisters_furniture_logo.jpeg";
import Button from "../../components/core/Button/Button";
import InputField from "../../components/core/InputField/InputField";
import { loginFormValidationSchema } from "../../constants/InputValidation/loginValidation";
import { LoginData } from "./types";
import { loginUser } from "../../redux/actions/auth/loginAction";
import { AppDispatch, StateType } from "../../redux/redux";
import "./login.scss";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { CLEAR_ERROR } from "../../constants/reduxActionsNames/user";

const Login = () => {
  const { loggedIn, loading, error } = useSelector(
    (state: StateType) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = async (data: LoginData) => {
    await dispatch(loginUser(data));
  };

  if (loggedIn) {
    window.location.href = "/";
  }

  useEffect(() => {
    if (error) toast.error(error);
    dispatch({ type: CLEAR_ERROR });
  }, [error, dispatch]);

  return (
    <div className="login">
      <img src={logo} alt="" className="logo" />
      <div className="login__credentials-card">
        <h4 className="login__title">Login Here</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="login_form">
          {LOGIN_INPUT_FIELDS.map((field, index) => (
            <InputField
              register={register}
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              error={errors[field.name as keyof LoginData]?.message}
            />
          ))}
          <Button
            loading={loading}
            title="Login"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          />
        </form>
        <a href="/forgot-password" className="forgot__password">
          Forgot Password
        </a>
      </div>
    </div>
  );
};

export default Login;
