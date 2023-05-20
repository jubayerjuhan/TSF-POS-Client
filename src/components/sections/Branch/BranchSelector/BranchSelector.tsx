import BRANCH_SELECTOR_FIELDS from "../../../../constants/selectors/branch/branchSelector";
import { BranchSelectorProps } from "./types";
import { Form } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/redux";
import { getBranchList } from "../../../../redux/actions/branches/branchesAction";

const BranchSelector = ({ setBranchId }: BranchSelectorProps) => {
  const { branches } = useSelector((state: StateType) => state.branches);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranchList());
  }, [dispatch]);

  useEffect(() => {
    if (branches) {
      const branchField = BRANCH_SELECTOR_FIELDS.find(
        (field) => field.name === "branch"
      );

      if (branchField) {
        branches.forEach((branch) => {
          const option = { label: branch.name, value: branch._id };
          if (!branchField.options?.some((o) => o.value === option.value)) {
            branchField.options?.push(option);
          }
        });
      }
    }
  }, [branches]);

  console.log(BRANCH_SELECTOR_FIELDS, "fields");

  return (
    <div style={{ maxWidth: 300, width: "100%" }}>
      {BRANCH_SELECTOR_FIELDS.map((field, index) => {
        return (
          <Form.Select
            id=""
            onChange={(e) => setBranchId(e.target.value)}
            key={index}
          >
            {field.options?.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        );
      })}
    </div>
  );
};

export default BranchSelector;
