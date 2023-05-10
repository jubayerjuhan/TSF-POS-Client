import * as yup from "yup";

const addUserValidationSchema = (role: string) => {
  return yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    role: yup.string().required(),
    branch:
      role === "admin"
        ? yup.string()
        : yup.string().required("Branch is required"),
  });
};

export default addUserValidationSchema;
