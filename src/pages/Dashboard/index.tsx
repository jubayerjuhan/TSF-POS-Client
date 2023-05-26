import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";
import StatsCard from "../../components/cards/StatsCard/StatsCard";

// icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../../redux/actions/sales/salesAction";
import { DefaultDate } from "./types";
import moment from "moment";
import { StateType } from "../../redux/redux";

const Dashboard = () => {
  const { sales } = useSelector((state: StateType) => state.sales);
  const { user } = useSelector((state: StateType) => state.user);
  const [defaultDate, setDefaultDate] = useState<DefaultDate>({
    startDate: moment().format("MM-DD-YYYY"),
    endDate: moment().format("MM-DD-YYYY"),
  });
  const dispatch = useDispatch();
  const [branch, setBranch] = useState("");
  const url = `sale/list?startDate=${defaultDate.startDate}&endDate=${defaultDate.endDate}&branch=${user.branch}`;

  useEffect(() => {
    dispatch(getSales(url));
  }, [dispatch, url]);

  console.log(sales, "sales");
  return (
    <Pagewrapper>
      <div>
        <StatsCard
          title="Total Revenue"
          icon={AttachMoneyIcon}
          number={sales?.total}
        />
      </div>
    </Pagewrapper>
  );
};

export default Dashboard;
