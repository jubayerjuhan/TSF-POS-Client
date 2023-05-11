import { useEffect, useState } from "react";
import EDIT_BRANCH_FIELDS from "../../constants/InputFields/branch/editBranch";
import { Branch } from "../../types/Branch/branchTypes";
import FormModal from "../Modals/FormModal/FormModal";
import Button from "../core/Button/Button";
import "./branchHeader.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux";
import { toast } from "react-hot-toast";
import { removeEmptyFields } from "../../utils/object/removeEmptyField";
import { editBranch, getBranch } from "../../redux/actions/branch/branchAction";

const BranchHeader = ({ branch }: { branch: Branch }) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const { error, message, loading } = useSelector(
    (state: StateType) => state.promise
  );

  useEffect(() => {
    if (message) toast.success(message);
    if (error) toast.error(error);
  }, [message, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BranchEditData>();

  const editFormSubmit = async (data: BranchEditData) => {
    const cleanedData = removeEmptyFields(data);
    await dispatch(editBranch(cleanedData, branch._id));
    setEditModalOpen(false);
    dispatch(getBranch(branch._id));
  };
  return (
    <>
      <FormModal
        loading={loading}
        title="Edit Branch"
        register={register}
        submitFields={handleSubmit(editFormSubmit)}
        errors={errors}
        fields={EDIT_BRANCH_FIELDS}
        open={editModalOpen}
        setOpen={setEditModalOpen}
      />
      <div className="mb-4">
        <div className="my-4">
          <p className="fs-3 fw-bold mb-2">{branch?.name}</p>
          <p className="fs-6 ">{branch?.address}</p>
        </div>
        <div className="d-flex gap-2">
          <Button
            title="Edit Branch"
            className="btn-warning text-black"
            onClick={() => setEditModalOpen(true)}
          />
          <Button title="Delete Branch" className="btn-danger text-white" />
        </div>
      </div>
    </>
  );
};

export default BranchHeader;
