import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchCard from "../../components/cards/BranchCard/BranchCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../redux/redux";
import { getBranchList } from "../../redux/actions/branches/branchesAction";
import "./branches.scss";

const Branches = () => {
  const dispatch: AppDispatch = useDispatch();
  const { branches } = useSelector((state: StateType) => state.branches);
  useEffect(() => {
    dispatch(getBranchList());
  }, [dispatch]);

  return (
    <Pagewrapper>
      <div className="branches">
        {branches?.map((branch, index) => {
          return <BranchCard branch={branch} key={index} />;
        })}
      </div>
    </Pagewrapper>
  );
};

export default Branches;
