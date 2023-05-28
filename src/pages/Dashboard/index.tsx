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
import { StateType } from "../../redux/redux";
import DashCharts from "../../components/sections/Dashboard/DashChart/DashCharts";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import dayjs from "dayjs";
import BranchSelector from "../../components/sections/Branch/BranchSelector/BranchSelector";

const Dashboard = () => {
  const { sales } = useSelector((state: StateType) => state.sales);
  const { amountRecived, amountToBeRecived } = useSelector(
    (state: StateType) => state.partialPayment
  );
  const { user } = useSelector((state: StateType) => state.user);
  const [defaultDate, setDefaultDate] = useState<DefaultDate>({
    startDate: dayjs(),
    endDate: dayjs(),
  });

  const dispatch = useDispatch();
  const [branch, setBranch] = useState<string>(user.branch ? user.branch : "");
  const url = `sale/list?startDate=${dayjs(defaultDate.startDate).format(
    "MM-DD-YYYY"
  )}&endDate=${dayjs(defaultDate.endDate).format(
    "MM-DD-YYYY"
  )}&branch=${branch}`;
  const partialPaymentUrl = `sale/partial-payment/list?startDate=${defaultDate.startDate}&endDate=${defaultDate.endDate}&branch=${branch}`;

  useEffect(() => {
    dispatch(getSales(url));
    dispatch(getPartialPaymentInfo(partialPaymentUrl));
  }, [dispatch, url, partialPaymentUrl]);

  return (
    <Pagewrapper>
      <div className="mb-4 d-flex gap-4 align-items-end">
        <div>
          <p className="mb-2">Please Select A Branch</p>
          <BranchSelector setBranchId={setBranch} style={{ height: 55 }} />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
            <p className="mb-2">From Date:</p>
            <DatePicker
              value={defaultDate?.startDate}
              onChange={(e) => setDefaultDate({ ...defaultDate, startDate: e })}
              format="DD-MM-YYYY"
            />
          </div>
          <div>
            <p className="mb-2">To Date</p>
            <DatePicker
              value={defaultDate?.endDate}
              onChange={(e) => setDefaultDate({ ...defaultDate, endDate: e })}
              format="DD-MM-YYYY"
            />
          </div>
        </LocalizationProvider>
      </div>
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
      <DashCharts />
    </Pagewrapper>
  );
};

export default Dashboard;
