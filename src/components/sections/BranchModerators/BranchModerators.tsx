import ModeratorCard from "../../cards/ModeratorCard/ModeratorCard";

const BranchModerators = () => {
  return (
    <div className="">
      <p className="fs-4 fw-bold text-muted">Moderators (5)</p>
      <div className="mt-4 d-flex flex-wrap gap-4">
        <ModeratorCard />
        <ModeratorCard />
        <ModeratorCard />
      </div>
    </div>
  );
};

export default BranchModerators;
