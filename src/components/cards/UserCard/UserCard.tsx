import Card from "react-bootstrap/Card";
import { UserCardTypes } from "../../../pages/Users/types";
import "./userCard.scss";

const UserCard = ({ user }: UserCardTypes) => {
  return (
    <Card style={{ maxWidth: 250 }}>
      <Card.Body>
        <Card.Title>
          {user.firstName} {user.lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
        <Card.Text>{user.branch}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
