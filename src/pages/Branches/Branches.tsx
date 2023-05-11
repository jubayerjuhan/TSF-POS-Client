import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchCard from "../../components/cards/BranchCard/BranchCard";
import "./branches.scss";

const Branches = () => {
  return (
    <Pagewrapper>
      <div className="branches">
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
      </div>
    </Pagewrapper>
  );
};

export default Branches;
