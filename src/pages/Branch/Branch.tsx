import { useParams } from "react-router-dom";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchModerators from "../../components/sections/BranchModerators/BranchModerators";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBranch } from "../../redux/actions/branch/branchAction";

const Branch = () => {
  const [notAvailable, setNotAvailable] = useState<boolean>(false);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getBranch(id));
    }
  }, [dispatch, id]);

  return (
    <Pagewrapper>
      <div className="my-4">
        <p className="fs-3 fw-bold mb-2">Mohammadpur Branch</p>
        <p className="fs-6 ">Mohammadpur Tajmahal Road, Dhaka</p>
      </div>
      <BranchModerators />
    </Pagewrapper>
  );
};

export default Branch;
