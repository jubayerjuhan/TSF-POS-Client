import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import OrderInformationContent from "../../components/sections/CustomOrder/OrderInformationContent/OrderInformationContent";
import "./orderInfo.scss";

const OrderInformation = () => {
  return (
    <Pagewrapper>
      <OrderInformationContent />
    </Pagewrapper>
  );
};

export default OrderInformation;
