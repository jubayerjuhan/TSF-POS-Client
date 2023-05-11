import Card from "react-bootstrap/Card";
import Button from "../../core/Button/Button";

const BranchCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="fs-5 fw-bold">Card Title</Card.Title>
        <Card.Text className="mb-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button title="View" />
      </Card.Body>
    </Card>
  );
};

export default BranchCard;
