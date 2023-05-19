import Button from "../../core/Button/Button";
import "./horizontalProductCard.scss";

const HorizontalProductCard = () => {
  return (
    <div className="sale__list-product p-3 rounded-2">
      <div className="product__image">
        <img
          src="https://squaretoiletries.com/wp-content/uploads/2020/09/square-rain-shower-gel-product-info-new-img.png"
          alt=""
        />
      </div>
      <div className="product__info">
        <p className="product__name mb-3">
          Rain Shower Refreshing Bath and Shower Gel
        </p>
        <div className="product__cart d-flex justify-content-between">
          <div className="product__price">
            <input type="number" />
            <Button title="Edit" />
          </div>
          <div className="product__quantity d-flex align-items-center gap-2">
            <Button title="-" />
            <p className="quantity">2</p>
            <Button title="+" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
