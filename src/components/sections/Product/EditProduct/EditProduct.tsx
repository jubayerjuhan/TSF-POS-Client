import React, { SetStateAction, useEffect, useState } from "react";
import ADD_PRODUCT_FIELDS from "../../../../constants/InputFields/product/addProduct";
import FormModal from "../../../Modals/FormModal/FormModal";
import { useForm } from "react-hook-form";
import { Product } from "../../../../types/Product/ProductTypes";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../../redux/actions/product/productAction";

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
    setValue,
  } = useForm();

  const dispatch = useDispatch();
  const [defaultValues, setDefaultValues] = useState<Product | undefined>(
    editingProduct
  );

  useEffect(() => {
    setDefaultValues(editingProduct);
  }, [editingProduct]);

  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((key) => {
        setValue(key, defaultValues[key as keyof Product]);
      });
    }
  }, [defaultValues, setValue]);

  const handleEditProduct = async (data: object) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (key === "photo") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }

    if (editingProduct?._id)
      await dispatch(editProduct(editingProduct?._id, formData));

    setOpen(false);
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
      defaultValues={defaultValues}
    />
  );
};

export default EditProduct;
