import { Col, Container, Row } from "react-bootstrap";
import { Product } from "../../types/Product/ProductTypes";
import { IMAGE_URL } from "../../constants/links/imageLink";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <Container>
      <Row style={{ gap: 15 }}>
        <Col lg={5}>
          <img
            src={`${IMAGE_URL + product?.photo}`}
            alt={product?.name}
            className="product__image"
          />
        </Col>
        <Col lg={6} className="product__details">
          <p className="fs-4 fw-bold">{product?.name}</p>
          <p className="fs-6 fw-semibold badge-pill badge badge-secondary">
            Product Id: {product?.productId}
          </p>
          <p>Color : {product?.color}</p>
          <p>Wood : {product?.wood}</p>
          <p className="fw-semibold badge badge-pill badge-primary">
            Cost Price: {product?.costPrice}
          </p>
          <br />
          <p className="fw-semibold badge badge-pill badge-success">
            Sell Price: {product?.sellPrice}
          </p>
          <p>Description : {`${product?.description}`}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
