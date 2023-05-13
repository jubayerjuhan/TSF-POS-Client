import { useParams } from "react-router-dom";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchModerators from "../../components/sections/BranchModerators/BranchModerators";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../redux/actions/branch/branchAction";
import { StateType } from "../../redux/redux";
import BigSpaceLoader from "../../components/loader/BigSpaceLoder/BigSpaceLoader";
import AlertPopup from "../../components/AlertPopup/AlertPopup";
import { CLEAR_ERROR } from "../../constants/reduxActionsNames/user";
import BranchHeader from "../../components/BranchHeader/BranchHeader";
import BranchProducts from "../../components/sections/BranchProducts/BranchProducts";
const Branch = () => {
  const { branch, error, loading } = useSelector(
    (state: StateType) => state.branch
  );
  const { message } = useSelector((state: StateType) => state.user);
  const { success } = useSelector((state: StateType) => state.promise);

  const { id = "" } = useParams<string>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_ERROR });
    dispatch(getBranch(id));
  }, [dispatch, id, success, message]);

  if (error) {
    return (
      <Pagewrapper>
        <AlertPopup message={error} />
      </Pagewrapper>
    );
  }

  console.log(branch, "branchinfo");

  return (
    <Pagewrapper>
      {loading && !branch ? (
        <BigSpaceLoader height={500} />
      ) : (
        <div>
          <BranchHeader branch={branch} />
          <BranchModerators
            moderators={branch?.moderators}
            branchId={branch?._id}
          />
          <BranchProducts products={branch?.products} />
        </div>
      )}
    </Pagewrapper>
  );
};

export default Branch;
