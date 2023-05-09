import Card from "react-bootstrap/Card";
import { UserCardTypes } from "../../../pages/Users/types";
import Button from "../../core/Button/Button";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/redux";
import "./userCard.scss";

const UserCard = ({ user }: UserCardTypes) => {
  const { user: loggedInUser } = useSelector((state: StateType) => state.user);
  return (
    <Card
      className="mw-100 user__card"
      style={{ minWidth: 250, maxWidth: "100%" }}
    >
      <Card.Body>
        <Card.Title className="font-weight-bold title ">
          {user.firstName} {user.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted role">
          {user.role.toUpperCase()}
        </Card.Subtitle>
        <Card.Text className="manage">Manages: {user.branch}</Card.Text>
        {user?._id !== loggedInUser?._id && (
          <div className="d-flex mt-3 gap-2">
            <Button title="Delete User" className="btn-danger w-100" />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default UserCard;
