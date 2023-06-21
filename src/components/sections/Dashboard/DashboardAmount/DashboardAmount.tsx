import StatsCard from "../../../cards/StatsCard/StatsCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useSelector } from "react-redux";
import { StateType } from "../../../../redux/redux";

const DashboardAmount = () => {
  const { sales } = useSelector((state: StateType) => state.sales);
  const { amountRecived, amountToBeRecived } = useSelector(
    (state: StateType) => state.partialPayment
  );

  return (
    <>
      <StatsCard
        title="Total Revenue"
        icon={AttachMoneyIcon}
        number={sales?.total + amountRecived}
      />
      <StatsCard
        title="Advance Payment and Sales Only"
        icon={AttachMoneyIcon}
        number={sales?.total}
      />
      <StatsCard
        title="Full Payment Recived"
        icon={AttachMoneyIcon}
        number={amountRecived}
      />
      <StatsCard
        title="Partial Payment Remaining"
        icon={AttachMoneyIcon}
        number={amountToBeRecived}
      />
    </>
  );
};

export default DashboardAmount;
