import { User } from "../../../types/User/userTypes";
import ModeratorCard from "../../cards/ModeratorCard/ModeratorCard";

const BranchModerators = ({ moderators }: { moderators: User[] }) => {
  return (
    <div className="">
      <p className="fs-4 fw-bold text-muted">
        Moderators ({moderators?.length})
      </p>
      <div className="mt-4 d-flex flex-wrap gap-4">
        {moderators?.map((moderator, key) => {
          return <ModeratorCard key={key} moderator={moderator} />;
        })}
      </div>
    </div>
  );
};

export default BranchModerators;
