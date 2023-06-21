import { SubmitHandler, useForm } from "react-hook-form";
import FormModal from "../../components/Modals/FormModal/FormModal";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import Button from "../../components/core/Button/Button";
import CUSTOM_ORDER_FIELDS from "../../constants/InputFields/customOrder/customOrderFields";
import { useEffect, useState } from "react";
import { CustomOrderType } from "../../types/CustomOrder/CustomOrderTypes";
import useAdminPermission from "../../hooks/permission/useAdminPermission";
import { useDispatch, useSelector } from "react-redux";
import { addCustomOrder } from "../../redux/actions/customOrder/customOrderAction";
import { StateType } from "../../redux/redux";

const CustomOrder = () => {
  const { user } = useSelector((state: StateType) => state.user);
  // const { user } = useSelector((state: StateType) => state.user);
  const [open, setOpen] = useState(false);
  const isAdmin = useAdminPermission();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CustomOrderType>();

  useEffect(() => {
    if (!isAdmin) setValue("branch", user.branch ? user.branch : "");
  }, [isAdmin, user, setValue]);

  const onSubmit: SubmitHandler<CustomOrderType> = async (
    value: CustomOrderType
  ) => {
    await dispatch(addCustomOrder(value));
  };

  return (
    <Pagewrapper>
      <Button title="Add Custom Order" onClick={() => setOpen(true)} />
      <FormModal
        title="Custom Order"
        fields={CUSTOM_ORDER_FIELDS}
        open={open}
        register={register}
        setOpen={setOpen}
        submitFields={handleSubmit(onSubmit)}
        errors={errors}
        branchSelector={isAdmin}
        setValue={setValue}
      />
    </Pagewrapper>
  );
};

export default CustomOrder;
