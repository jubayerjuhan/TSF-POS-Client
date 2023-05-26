import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import StatsCard from "../../components/cards/StatsCard/StatsCard";

// icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch, useSelector } from "react-redux";
import {
  getPartialPaymentInfo,
  getSales,
} from "../../redux/actions/sales/salesAction";
import { DefaultDate } from "./types";
import moment from "moment";
import { StateType } from "../../redux/redux";

const Dashboard = () => {
  const { sales } = useSelector((state: StateType) => state.sales);
  const { amountRecived, amountToBeRecived } = useSelector(
    (state: StateType) => state.partialPayment
  );
  const { user } = useSelector((state: StateType) => state.user);
  const [defaultDate, setDefaultDate] = useState<DefaultDate>({
    startDate: moment().format("MM-DD-YYYY"),
    endDate: moment().format("MM-DD-YYYY"),
  });
  const dispatch = useDispatch();
  const [branch, setBranch] = useState("");
  const url = `sale/list?startDate=${defaultDate.startDate}&endDate=${defaultDate.endDate}&branch=${user.branch}`;
  const partialPaymentUrl = `sale/partial-payment/list?startDate=${defaultDate.startDate}&endDate=${defaultDate.endDate}&branch=${user.branch}`;

  useEffect(() => {
    dispatch(getSales(url));
    dispatch(getPartialPaymentInfo(partialPaymentUrl));
  }, [dispatch, url, partialPaymentUrl]);

  console.log(sales, "sales");
  return (
    <Pagewrapper>
      <div className="d-flex gap-4 flex-wrap">
        <StatsCard
          title="Total Revenue"
          icon={AttachMoneyIcon}
          number={sales?.total + amountRecived}
        />
        <StatsCard
          title="First Partial Payment and Sales Only"
          icon={AttachMoneyIcon}
          number={sales?.total}
        />
        <StatsCard
          title="2nd Partial Payment Recived"
          icon={AttachMoneyIcon}
          number={amountRecived}
        />
        <StatsCard
          title="Partial Payment Remaining"
          icon={AttachMoneyIcon}
          number={amountToBeRecived}
        />
      </div>
    </Pagewrapper>
  );
};

export default Dashboard;
