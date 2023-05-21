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
import Checkbox from "../../components/core/Checkbox/Checkbox";
import SelectField from "../../components/core/SelectField/SelectField";
import { addSale } from "../../redux/actions/sale/sale";
import { toast } from "react-hot-toast";
import { CLEAR_SALE_MESSAGE } from "../../constants/reduxActionsNames/sale";
import AlertPopup from "../../components/AlertPopup/AlertPopup";

const Sale = () => {
  // const [total,]
  const { error, message, success } = useSelector(
    (state: StateType) => state.sale
  );
  const { user } = useSelector((state: StateType) => state.user);
  const { cart } = useSelector((state: StateType) => state.cart);
  const [branchId, setBranchId] = useState<string | null>(
    user.branch ? user.branch : null
  );

  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (error) toast.error(error);
    if (message) {
      toast.success(message);
    }
    dispatch({ type: CLEAR_SALE_MESSAGE });
  }, [error, message, dispatch]);

  useEffect(() => {
    if (branchId) {
      dispatch(getBranch(branchId));
      console.log(branchId, "branchID");
    }
  }, [dispatch, branchId, setValue]);

  useEffect(() => {
    const { rearrangedCart, totalPrice } = rearrangeCart(cart);
    setValue("items", rearrangedCart);
    setValue("total", totalPrice);
    setValue("branch", branchId);
  }, [cart, setValue, branchId]);

  const submitSale = (data: object) => {
    console.log(data, "data...");
    // reset({ values: {} });
    dispatch(addSale(data));
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
          {!branchId ? (
            <AlertPopup message="Please Select A Branch First" />
          ) : (
            <>
              {success ? (
                <AlertPopup
                  message="Sale Success"
                  btnTitle="Print Invoice"
                  type="success"
                />
              ) : (
                <>
                  <div className="sale__info my-3 d-flex flex-column gap-3">
                    {cart.map((product, key) => (
                      <HorizontalProductCard key={key} product={product} />
                    ))}
                  </div>
                  <div className="customer__details">
                    <div className="price__section">
                      <p className="mb-2 fw-semibold">
                        Total Price : <span>{watch("total")}</span> Taka
                      </p>
                    </div>
                    <div className="customer__info d-flex flex-column gap-3 my-4">
                      {ADD_SALE_FIELDS.map((field, index) => {
                        if (field.name === "partialPayment")
                          return (
                            <div key={index}>
                              <Checkbox
                                label={field.label}
                                name={field.name}
                                register={register}
                              />
                              {watch("partialPayment") && (
                                <InputField
                                  className="mt-3"
                                  label="Partial Payment Amount"
                                  name="partialPaymentAmount"
                                  placeholder="Enter Partial Payment Amount"
                                  register={register}
                                  type="number"
                                />
                              )}
                            </div>
                          );

                        if (field.type === "select") {
                          return (
                            <SelectField
                              error={errors[field.name]?.message}
                              field={field}
                              register={register}
                            />
                          );
                        }
                        return (
                          <InputField
                            key={index}
                            label={field.label}
                            name={field.name}
                            register={register}
                            type={field.type}
                            placeholder={field.placeholder}
                          />
                        );
                      })}
                      <Button
                        title="Submit"
                        onClick={handleSubmit(submitSale)}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Pagewrapper>
  );
};

export default Sale;
