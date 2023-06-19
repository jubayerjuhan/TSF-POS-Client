import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import useAdminPermission from "../../hooks/permission/useAdminPermission";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/redux";

const Expenses = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const [branchId, setBranchId] = useState(user?.branch ? user.branch : "");
  const adminPermission = useAdminPermission();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch();
  }, [dispatch, branchId]);
  return (
    <Pagewrapper>
      {adminPermission && <BranchSelector setBranchId={setBranchId} />}
    </Pagewrapper>
  );
};

export default Expenses;
