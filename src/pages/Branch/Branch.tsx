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
const Branch = () => {
  const { branch, error, loading } = useSelector(
    (state: StateType) => state.branch
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLEAR_ERROR });
    if (id) {
      dispatch(getBranch(id));
    }
  }, [dispatch, id]);

  if (error) {
    return (
      <Pagewrapper>
        <AlertPopup message={error} />
      </Pagewrapper>
    );
  }
  return (
    <Pagewrapper>
      {loading ? (
        <BigSpaceLoader height={500} />
      ) : (
        <div>
          <BranchHeader branch={branch} />
          <BranchModerators moderators={branch?.moderators} />
        </div>
      )}
    </Pagewrapper>
  );
};

export default Branch;