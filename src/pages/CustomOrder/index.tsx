import { SubmitHandler, useForm } from "react-hook-form";
import FormModal from "../../components/Modals/FormModal/FormModal";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import Button from "../../components/core/Button/Button";
import CUSTOM_ORDER_FIELDS from "../../constants/InputFields/customOrder/customOrderFields";
import { useState } from "react";
import { CustomOrderType } from "../../types/CustomOrder/CustomOrderTypes";
import useAdminPermission from "../../hooks/permission/useAdminPermission";
import { useDispatch } from "react-redux";
import { addCustomOrder } from "../../redux/actions/customOrder/customOrderAction";

const CustomOrder = () => {
  const [open, setOpen] = useState(false);
  const isAdmin = useAdminPermission();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomOrderType>();

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
      />
    </Pagewrapper>
  );
};

export default CustomOrder;
