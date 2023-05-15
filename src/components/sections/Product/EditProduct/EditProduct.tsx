import React, { SetStateAction } from "react";
import ADD_PRODUCT_FIELDS from "../../../../constants/InputFields/product/addProduct";
import FormModal from "../../../Modals/FormModal/FormModal";
import { useForm } from "react-hook-form";
import { Product } from "../../../../types/Product/ProductTypes";

const EditProduct = ({
  open,
  setOpen,
  editingProduct,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  editingProduct?: Product;
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const handleEditProduct = (data: object) => {
    console.log(editingProduct, "data");
  };

  return (
    <FormModal
      errors={errors}
      fields={ADD_PRODUCT_FIELDS}
      register={register}
      submitFields={handleSubmit(handleEditProduct)}
      title="Edit Product"
      loading={false}
      open={open}
      setOpen={setOpen}
      defaultValues={editingProduct}
    />
  );
};

export default EditProduct;
