import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Product } from "../../../types/Product/ProductTypes";
import { IMAGE_URL } from "../../../constants/links/imageLink";
import "./productCard.scss";

const ProductCard = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  console.log(product);
  return (
    <Card className="product__card">
      <Card.Img
        className="product__image "
        variant="top"
        src={`${IMAGE_URL}${product.photo}`}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fs-6">{product.name}</Card.Title>
          <Card.Text>Cost Price: {product.costPrice}</Card.Text>
          <Card.Text className="mb-3">
            Sell Price: {product.costPrice}
          </Card.Text>
        </div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
