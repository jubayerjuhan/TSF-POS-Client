import Button from "../../core/Button/Button";
import InputField from "../../core/InputField/InputField";
import { FormModalTypes } from "./types";

const FormModal = ({
  submitFields,
  title,
  fields,
  register,
  preselectOption,
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
                  <select
                    className="form-select"
                    id=""
                    {...register(field.name)}
                  >
                    {field.options?.map((option, index) => (
                      <option
                        value={option.value}
                        key={index}
                        selected={option.value === preselectOption}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                );
              }
              return (
                <InputField
                  key={index}
                  placeholder={field.placeholder}
                  name={field.name}
                  type={field.type}
                  register={register}
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
                type="button"
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
