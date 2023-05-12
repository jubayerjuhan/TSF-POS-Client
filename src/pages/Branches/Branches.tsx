import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchCard from "../../components/cards/BranchCard/BranchCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux";
import { getBranchList } from "../../redux/actions/branches/branchesAction";
import "./branches.scss";
import Button from "../../components/core/Button/Button";
import FormModal from "../../components/Modals/FormModal/FormModal";
import BRANCH_FIELDS from "../../constants/InputFields/branch/branch";
import { useForm } from "react-hook-form";

const Branches = () => {
  const dispatch: AppDispatch = useDispatch();
  const [addBranchModalOpen, setAddBranchModalOpen] = useState<boolean>(false);
  const { branches } = useSelector((state: StateType) => state.branches);

  useEffect(() => {
    dispatch(getBranchList());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAddBranchSubmit = (data: BranchData) => {
    console.log();
  };
  return (
    <Pagewrapper>
      <Button
        title="Add Branch"
        className="mb-4"
        onClick={() => setAddBranchModalOpen(true)}
      />
      <FormModal
        title="Add Branch"
        fields={BRANCH_FIELDS}
        errors={errors}
        open={addBranchModalOpen}
        setOpen={setAddBranchModalOpen}
        register={register}
        submitFields={handleSubmit(onAddBranchSubmit)}
      />
      <div className="branches">
        {branches?.map((branch, index) => {
          return <BranchCard branch={branch} key={index} />;
        })}
      </div>
    </Pagewrapper>
  );
};

export default Branches;
