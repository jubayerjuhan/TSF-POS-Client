import FormModal from "../../../Modals/FormModal/FormModal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeBranchProductQuantity } from "../../../../redux/actions/product/branch/branchProductAction";
import { getBranch } from "../../../../redux/actions/branch/branchAction";
import { StateType } from "../../../../redux/redux";
import ADD_PRODUCT_FIELDS from "../../../../constants/InputFields/product/addProduct";

const EditBranchProduct = ({
  open,
  productId,
  setOpen,
  branchId,
}: EditBranchProductTypes) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: StateType) => state.product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditBranchProductQuantityData>();

  const onSubmit = async (data: any) => {
    await dispatch(changeBranchProductQuantity(branchId, productId, data));
    setOpen(false);
    await dispatch(getBranch(branchId));
  };

  return (
    <FormModal
      title="Change Product Quantity"
      errors={errors}
      fields={ADD_PRODUCT_FIELDS}
      open={open}
      loading={loading}
      register={register}
      setOpen={setOpen}
      submitFields={handleSubmit(onSubmit)}
    />
  );
};

export default EditBranchProduct;
