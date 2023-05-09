import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users/usersAction";
import { AppDispatch, StateType } from "../../redux/redux";
import UserCard from "../../components/cards/UserCard/UserCard";
import { Skeleton } from "@mui/material";
import AppModal from "../../components/AppModal/AppModal";
// import UserCard from "../../components/cards/UserCard/UserCard";

const Users = () => {
  const { users, loading } = useSelector((state: StateType) => state.users);
  const [deleteingUserId, setDeletingUserId] = useState<string>("");
  const [deletionModelOpen, setDeletionModelOpen] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteUser = () => {
    console.log(deleteingUserId, "object...");
  };

  const cancelDeletion = () => {
    console.log("object");
  };

  return (
    <Pagewrapper>
      <AppModal
        open={deletionModelOpen}
        setOpen={setDeletionModelOpen}
        handleCancel={cancelDeletion}
        handleConfirm={deleteUser}
        title="Confirm Deletion"
        description="Do you want to delete this user"
      />
      {loading ? (
        <div className="users__list d-flex gap-4 flex-wrap">
          {[...Array(4)].map((_, index) => (
            <Skeleton
              variant="rectangular"
              width={250}
              height={150}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div className="users__list d-flex gap-4 flex-wrap">
          {users?.map((user, index) => {
            return (
              <UserCard
                setDeletionModelOpen={setDeletionModelOpen}
                setDeletingUserId={setDeletingUserId}
                key={index}
                user={user}
              />
            );
          })}
        </div>
      )}
    </Pagewrapper>
  );
};

export default Users;
