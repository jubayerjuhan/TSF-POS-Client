import { useState } from "react";
import Button from "../../../core/Button/Button";
import FormModal from "../../../Modals/FormModal/FormModal";
import { useForm } from "react-hook-form";
import ADD_PRODUCT_FIELDS from "../../../../constants/InputFields/product/addProduct";
import ADD_PRODUCT_SCHEMA from "../../../../constants/InputValidation/Product/addProductValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductFormData } from "./types";

const AddProduct = () => {
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: yupResolver(ADD_PRODUCT_SCHEMA),
  });

  const onSubmit = (data: ProductFormData) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (key === "photo") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <div className="mb-4">
      <FormModal
        errors={errors}
        fields={ADD_PRODUCT_FIELDS}
        open={addProductModalOpen}
        setOpen={setAddProductModalOpen}
        register={register}
        submitFields={handleSubmit(onSubmit)}
        title="Add Product"
      />
      <Button
        title="Add Product"
        onClick={() => setAddProductModalOpen(true)}
      />
    </div>
  );
};

export default AddProduct;
