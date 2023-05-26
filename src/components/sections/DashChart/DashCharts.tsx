import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/redux";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const DashCharts = () => {
  const { sales } = useSelector((state: StateType) => state.sales);

  const today = moment().format("DD-MM-YYYY");
  const lastSevenDays = [];
  const dayNameLabels = [];

  for (let i = 0; i < 7; i++) {
    lastSevenDays.push({ date: moment().subtract(i, "days"), amount: 0 });
    dayNameLabels.push(moment().subtract(i, "days").format("dddd"));
  }

  // here iterating last 7days
  lastSevenDays.forEach((day) => {
    // here iterating every sales
    sales?.sales?.forEach((sale) => {
      // checking if there is any 2ndpartialAmountPaid today
      if (
        moment(sale.partialAmountPayingDate)
          .startOf("day")
          .format("DD-MM-YY") ===
        moment(day.date).startOf("day").format("DD-MM-YY")
      ) {
        // if there is a 2nd partial payment add it with today
        day.amount += sale.total - sale.partialPaymentAmount;
      }

      // checking if there is any sale created on that day
      if (
        moment(sale.createdAt).startOf("day").format("DD-MM-YY") ===
        moment(day.date).startOf("day").format("DD-MM-YY")
      ) {
        // if not partial payment add full total
        if (!sale.partialPayment) return (day.amount += sale.total);

        // if partial payment add only partialPaymentAmount
        if (sale.partialPayment)
          return (day.amount += sale.partialPaymentAmount);
      }
    });
  });

  const data = {
    labels: dayNameLabels,
    datasets: [
      {
        label: "Dataset 1",
        data: lastSevenDays.map((day) => day.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="mt-4">
      <Line options={options} data={data} />;
    </div>
  );
};

export default DashCharts;
