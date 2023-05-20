import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";
import { useEffect, useState } from "react";
import ProductSection from "../../components/sections/Sale/ProductSection/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/redux";
import "./sale.scss";
import HorizontalProductCard from "../../components/cards/HorizontalProductCard/HorizontalProductCard";
import { getBranch } from "../../redux/actions/branch/branchAction";
import { useForm } from "react-hook-form";
import { rearrangeCart } from "../../utils/cart/rearrangeCart";
import { ADD_SALE_FIELDS } from "../../constants/InputFields/sale/addSale";
import InputField from "../../components/core/InputField/InputField";
import Button from "../../components/core/Button/Button";

const Sale = () => {
  // const { branch, loading } = useSelector((state: StateType) => state.branch);
  const { user } = useSelector((state: StateType) => state.user);
  const { cart } = useSelector((state: StateType) => state.cart);
  const [branchId, setBranchId] = useState<string | null>(
    user.branch ? user.branch : null
  );

  const dispatch = useDispatch();
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    if (branchId) dispatch(getBranch(branchId));
  }, [dispatch, branchId]);

  useEffect(() => {
    const newCart = rearrangeCart(cart);
    setValue("items", newCart);
  }, [cart, setValue]);

  const submitSale = (data: object) => {
    console.log(data);
  };

  return (
    <Pagewrapper hideBar>
      <div className="sale-page" style={{ height: "100vh" }}>
        <div className="selector-side p-4">
          {!user.branch && <BranchSelector setBranchId={setBranchId} />}
          <ProductSection />
        </div>
        <div className="sale__info-side pt-3 p-4 ">
          <h6 className="fs-5 fw-semibold">Create Order</h6>
          <div className="sale__info my-3 d-flex flex-column gap-3">
            {cart.map((product, key) => (
              <HorizontalProductCard key={key} product={product} />
            ))}
          </div>
          <div className="customer__details">
            {/* <h6 className="fs-5 fw-semibold">Customer Info</h6> */}
            <div className="customer__info d-flex flex-column gap-3 my-4">
              {ADD_SALE_FIELDS.map((field, index) => (
                <InputField
                  label={field.label}
                  name={field.label}
                  register={register}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              ))}
              <Button title="Submit" onClick={handleSubmit(submitSale)} />
            </div>
          </div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
