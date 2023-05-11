import Card from "react-bootstrap/Card";
import Button from "../../core/Button/Button";
import { BranchCardTypes } from "./type";

const BranchCard = ({ branch }: BranchCardTypes) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">{branch.name}</Card.Title>
        <Card.Text className="mb-2">{branch.address}</Card.Text>
        <Button title="Branch Details" />
      </Card.Body>
    </Card>
  );
};

export default BranchCard;
