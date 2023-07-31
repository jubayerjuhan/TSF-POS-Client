import Card from "react-bootstrap/Card";
import Button from "../../core/Button/Button";
import "./productCard.scss";
import { ProductCardTypes } from "./types";
import { useNavigate } from "react-router-dom";
import useAdminPermission from "../../../hooks/permission/useAdminPermission";

const ProductCard = ({
  sales,
  product,
  quantity,
  setDeletingProductId,
  setDeletionModelOpen,
  setEditingModelOpen,
  setEditingProductId,
  setEditingProduct,
  hideQty,
  showTotalStock,
}: ProductCardTypes) => {
  const isAdmin = useAdminPermission();

  const onDeleteClick = () => {
    setDeletingProductId(product._id);
    setDeletionModelOpen(true);
  };

  const navigate = useNavigate();

  const onEditClick = () => {
    setEditingModelOpen(true);
    setEditingProductId(product._id);
    if (setEditingProduct) setEditingProduct(product);
  };
  return (
    <Card className="product__card">
      <Card.Img
        className="product__image "
        variant="top"
        src={`${product.photo}`}
        onClick={() => navigate(`/product/${product.productId}`)}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div onClick={() => navigate(`/product/${product.productId}`)}>
          <Card.Title className="fs-6 fw-semibold">{product.name}</Card.Title>
          <Card.Text>
            Id: <span className="fw-bold">{product.productId}</span>
          </Card.Text>
          {hideQty ? (
            <></>
          ) : (
            <Card.Text>
              Quantity: <span className="fw-bold">{quantity}</span>
            </Card.Text>
          )}
          {isAdmin && <Card.Text>Cost Price: {product.costPrice}</Card.Text>}
          <Card.Text className="mb-3">
            Sell Price: {product.sellPrice}
          </Card.Text>

          {showTotalStock && (
            <Card.Text className="mb-3">
              Total Stock: {product?.totalStock}
            </Card.Text>
          )}
          {isAdmin && (
            <Card.Text className="mb-3">Total Sale: {product?.sales}</Card.Text>
          )}
        </div>
        {isAdmin && (
          <div className="button__container">
            <Button
              title="Delete"
              className="btn-danger"
              onClick={onDeleteClick}
            />
            <Button
              title="Edit"
              className="btn-primary"
              onClick={onEditClick}
            />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
