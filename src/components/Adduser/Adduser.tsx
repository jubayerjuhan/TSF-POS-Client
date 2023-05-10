import { useForm } from "react-hook-form";
import {
  ADD_USER_FIELDS,
  ADD_USER_FIELDS_WITH_BRANCH,
} from "../../constants/InputFields/AddUser/addUser";
import Button from "../core/Button/Button";
import FormModal from "../Modals/FormModal/FormModal";

const Adduser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const role = watch("role");

  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  return (
    <>
      <Button
        title="Add User"
        className="mb-4"
        data-toggle="modal"
        data-target="#exampleModal"
      />
      <FormModal
        submitFields={handleSubmit(onSubmit)}
        preselectOption={"moderator"}
        title="Add User"
        fields={role !== "admin" ? ADD_USER_FIELDS : ADD_USER_FIELDS}
        register={register}
      />
    </>
  );
};

export default Adduser;
