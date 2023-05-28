import BranchSelector from "../../Branch/BranchSelector/BranchSelector";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../../redux/redux";

const DashboardBranchAndDatePicker = () => {
  const { user } = useSelector((state: StateType) => state.user);
  const [branch, setBranch] = useState<string>(user.branch ? user.branch : "");

  return (
    <div className="mb-4 d-flex gap-4 align-items-end">
      <div>
        <p className="mb-2">Please Select A Branch</p>
        <BranchSelector setBranchId={setBranch} style={{ height: 55 }} />
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <p className="mb-2">From Date:</p>
          {/* <DatePicker
            value={}
            onChange={(e) => setDefaultDate({ ...defaultDate, startDate: e })}
            format="DD-MM-YYYY"
          /> */}
        </div>
        <div>
          <p className="mb-2">To Date</p>
          {/* <DatePicker
            value={defaultDate?.endDate}
            onChange={(e) => setDefaultDate({ ...defaultDate, endDate: e })}
            format="DD-MM-YYYY"
          /> */}
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default DashboardBranchAndDatePicker;
