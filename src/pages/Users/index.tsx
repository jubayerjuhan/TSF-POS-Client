import { useEffect } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/users/usersAction";
import { AppDispatch, StateType } from "../../redux/redux";
import UserCard from "../../components/cards/UserCard/UserCard";
// import UserCard from "../../components/cards/UserCard/UserCard";

const Users = () => {
  const { users } = useSelector((state: StateType) => state.users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users, "users");
  return (
    <Pagewrapper>
      <div className="users__list">
        {users?.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
      </div>
    </Pagewrapper>
  );
};

export default Users;
