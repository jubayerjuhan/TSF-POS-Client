import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { useDispatch } from "react-redux";
import { getBranchValuation } from "../../redux/actions/branchValuation/branchValuationAction";

const BranchValuation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranchValuation());
  }, [dispatch]);

  return <Pagewrapper></Pagewrapper>;
};

export default BranchValuation;
