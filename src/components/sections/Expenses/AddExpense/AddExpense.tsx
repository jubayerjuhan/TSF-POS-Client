import "./AddExpense.scss";
import Button from "../../../core/Button/Button";
import FormModal from "../../../Modals/FormModal/FormModal";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import { useState } from "react";
import ADD_EXPENSE_FIELDS from "../../../../constants/InputFields/expense/addExpenseFields";
import { yupResolver } from "@hookform/resolvers/yup";
import expenseValidationSchema from "../../../../constants/InputValidation/expense/expenseValidation";

const AddExpense = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(expenseValidationSchema),
  });

  // onSubmit function to dispatch the action
  const onSubmit: SubmitHandler<FieldValues> = (value: FieldValues) => {
    console.log(value, "val");
  };

  return (
    <div className="add__expense-section">
      <Button title="Add Expense" onClick={() => setOpen(true)} />
      <FormModal
        branchSelector
        fields={ADD_EXPENSE_FIELDS}
        title="Add Expense"
        errors={errors}
        setValue={setValue}
        open={open}
        register={register}
        setOpen={setOpen}
        submitFields={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default AddExpense;
