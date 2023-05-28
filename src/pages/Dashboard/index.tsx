import { useEffect, useState } from "react";
import Pagewrapper from "../../components/Pagewrapper/Pagewrapper";

// icons
import { useDispatch, useSelector } from "react-redux";
import {
  getPartialPaymentInfo,
  getSales,
} from "../../redux/actions/sales/salesAction";
import { DefaultDate } from "./types";
import { StateType } from "../../redux/redux";
import DashCharts from "../../components/sections/Dashboard/DashChart/DashCharts";

import DashboardAmount from "../../components/sections/Dashboard/DashboardAmount/DashboardAmount";
import DashboardBranchAndDatePicker from "../../components/sections/Dashboard/DashboardBranchAndDatePicker";

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const url = `sale/list?startDate=${dayjs(defaultDate.startDate).format(
  //   "MM-DD-YYYY"
  // )}&endDate=${dayjs(defaultDate.endDate).format(
  //   "MM-DD-YYYY"
  // )}&branch=${branch}`;
  // const partialPaymentUrl = `sale/partial-payment/list?startDate=${defaultDate.startDate}&endDate=${defaultDate.endDate}&branch=${branch}`;

  // useEffect(() => {
  //   dispatch(getSales(url));
  //   dispatch(getPartialPaymentInfo(partialPaymentUrl));
  // }, [dispatch, url, partialPaymentUrl]);

  return (
    <Pagewrapper>
      <DashboardBranchAndDatePicker />
      <div className="d-flex gap-4 flex-wrap">
        <DashboardAmount />
      </div>
      <DashCharts />
    </Pagewrapper>
  );
};

export default Dashboard;
