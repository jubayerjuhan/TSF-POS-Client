import { Col, Container, Row } from "react-bootstrap";
import { IMAGE_URL } from "../../constants/links/imageLink";
import { SearchedProduct } from "../../types/Product/searchProductTypes";
import useAdminPermission from "../../hooks/permission/useAdminPermission";

const ProductDetail = ({
  product,
  branchDetail,
}: {
  product: SearchedProduct;
  branchDetail?: boolean;
}) => {
  const isAdmin = useAdminPermission();

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
          <p className="fw-semibold badge-pill badge badge-secondary">
            Product Id: {product?.productId}
          </p>
          <p>Color : {product?.color}</p>
          <p>Wood : {product?.wood}</p>
          {isAdmin && (
            <p className="fw-semibold badge badge-pill badge-primary">
              Cost Price: {product?.costPrice}
            </p>
          )}
          <br />
          <p className="fw-semibold badge badge-pill badge-success">
            Sell Price: {product?.sellPrice}
          </p>
          <p>Description : {`${product?.description}`}</p>
          {branchDetail && (
            <div>
              <p className="fs- my-2 mb-3 badge badge-pill badge-info">
                Available Branches:{" "}
              </p>
              <div className="gap-3 d-flex flex-column">
                {product.branches.map((branch, key) => (
                  <div className="card" key={key}>
                    <div className="card-body">
                      <h5 className="fs-6 mb-3 w-100">{branch.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Quantity : {branch.quantity}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
