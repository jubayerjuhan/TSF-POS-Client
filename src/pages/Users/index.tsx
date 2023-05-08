import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users/usersAction";
import { AppDispatch, StateType } from "../../redux/redux";
import UserCard from "../../components/cards/UserCard/UserCard";
import { Skeleton } from "@mui/material";
// import UserCard from "../../components/cards/UserCard/UserCard";

const Users = () => {
  const { users, loading } = useSelector((state: StateType) => state.users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users, "users");
  return (
    <Pagewrapper>
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
            return <UserCard key={index} user={user} />;
          })}
        </div>
      )}
    </Pagewrapper>
  );
};

export default Users;
