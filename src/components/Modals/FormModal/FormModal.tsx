import Button from "../../core/Button/Button";
import InputField from "../../core/InputField/InputField";
import SelectField from "../../core/SelectField/SelectField";
import { FormModalTypes } from "./types";

const FormModal = ({
  submitFields,
  title,
  fields,
  register,
  errors,
}: FormModalTypes) => {
  return (
    <div
      className="modal fade "
      id="exampleModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog " role="document">
        <div className="modal-content p-3" style={{ marginTop: 90 }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="d-flex flex-column gap-4 my-4">
            {fields.map((field, index) => {
              if (field.type === "select") {
                return (
                  <SelectField
                    field={field}
                    register={register}
                    error={errors[field.name]?.message}
                  />
                );
              }
              console.log(errors[field.name]?.message);
              return (
                <InputField
                  error={errors[field.name]?.message}
                  key={index}
                  placeholder={field.placeholder}
                  name={field.name}
                  type={field.type}
                  register={register}
                  label={field.label}
                />
              );
            })}

            <div className="modal-footer">
              <Button
                title="Cancel"
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              />
              <Button
                onClick={submitFields}
                title="Submit"
                type="submit"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
