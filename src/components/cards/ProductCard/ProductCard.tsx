import Card from "react-bootstrap/Card";
import { IMAGE_URL } from "../../../constants/links/imageLink";
import Button from "../../core/Button/Button";
import "./productCard.scss";
import { ProductCardTypes } from "./types";

const ProductCard = ({
  product,
  quantity,
  setDeletingProductId,
  setDeletionModelOpen,
  setEditingModelOpen,
  setEditingProductId,
}: ProductCardTypes) => {
  const onDeleteClick = () => {
    setDeletingProductId(product._id);
    setDeletionModelOpen(true);
  };

  const onEditClick = () => {
    setEditingModelOpen(true);
    setEditingProductId(product._id);
  };
  return (
    <Card className="product__card">
      <Card.Img
        className="product__image "
        variant="top"
        src={`${IMAGE_URL}${product.photo}`}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fs-6 fw-semibold">{product.name}</Card.Title>
          <Card.Text>
            Id: <span className="fw-bold">{product.productId}</span>
          </Card.Text>
          <Card.Text>
            Quantity: <span className="fw-bold">{quantity}</span>{" "}
          </Card.Text>
          <Card.Text>Cost Price: {product.costPrice}</Card.Text>
          <Card.Text className="mb-3">
            Sell Price: {product.costPrice}
          </Card.Text>
        </div>
        <div className="button__container">
          <Button
            title="Delete"
            className="btn-danger"
            onClick={onDeleteClick}
          />
          <Button title="Edit" className="btn-primary" onClick={onEditClick} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
