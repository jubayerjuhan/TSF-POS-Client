import "./AddExpense.scss";
import Button from "../../../core/Button/Button";
import FormModal from "../../../Modals/FormModal/FormModal";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ADD_EXPENSE_FIELDS from "../../../../constants/InputFields/expense/addExpenseFields";

const AddExpense = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(addUserValidationSchema(userRole)),
  });

  // onsubmit function to dispatch the action
  const onSubmit = (value: any) => {
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
