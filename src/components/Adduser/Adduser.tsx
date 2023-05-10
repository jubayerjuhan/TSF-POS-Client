import { useForm } from "react-hook-form";
import {
  ADD_USER_FIELDS,
  ADD_USER_FIELDS_WITH_BRANCH,
} from "../../constants/InputFields/user/addUser";
import Button from "../core/Button/Button";
import FormModal from "../Modals/FormModal/FormModal";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import addUserValidationSchema from "../../constants/InputValidation/User/AddUserValidation";

const Adduser = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [forceRender, setForceRender] = useState(0);
  const [userRole, setUserRole] = useState<string>("moderator");
  const { branches, loading } = useSelector(
    (state: StateType) => state.branches
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserValidationSchema(userRole)),
  });

  useEffect(() => {
    if (branches) {
      const branchField = ADD_USER_FIELDS_WITH_BRANCH.find(
        (field) => field.name === "branch"
      );

      if (branchField) {
        branches.forEach((branch) => {
          const option = { label: branch.name, value: branch._id };
          if (!branchField.options?.some((o) => o.value === option.value)) {
            branchField.options?.push(option);
          }
        });
      }

      setForceRender(1);
    }
  }, [branches, forceRender]);

  const role = watch("role");
  useEffect(() => {
    setUserRole(role);
  }, [role]);

  const onSubmit = (value: any) => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        title="Add User"
        className="mb-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => setModalOpen(true)}
      />
      <FormModal
        loading={false}
        open={modalOpen}
        setOpen={setModalOpen}
        errors={errors}
        key={forceRender}
        submitFields={handleSubmit(onSubmit)}
        title="Add User"
        fields={
          role !== "admin" ? ADD_USER_FIELDS_WITH_BRANCH : ADD_USER_FIELDS
        }
        register={register}
      />
    </>
  );
};

export default Adduser;
