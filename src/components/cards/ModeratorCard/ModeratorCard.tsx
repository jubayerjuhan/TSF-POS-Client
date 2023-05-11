import Card from "react-bootstrap/Card";
import { User } from "../../../types/User/userTypes";
import Button from "../../core/Button/Button";

const ModeratorCard = ({ moderator }: { moderator?: User }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="fs-5 fw-bold text-secondary">
          {moderator?.firstName} Jubayer Hossain
        </Card.Title>
        <Card.Text style={{ fontSize: 14 }}>davidjuhan23@gmail.com</Card.Text>
        <Button title="Delete Moderator " className="mt-3 btn-danger" />
      </Card.Body>
    </Card>
  );
};

export default ModeratorCard;
