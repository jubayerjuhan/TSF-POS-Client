import { CircularProgress } from "@mui/material";
import Button from "../../core/Button/Button";
import InputField from "../../core/InputField/InputField";
import SelectField from "../../core/SelectField/SelectField";
import { FormModalTypes } from "./types";
import Modal from "react-bootstrap/Modal";

const FormModal = ({
  open,
  setOpen,
  loading,
  submitFields,
  title,
  fields,
  register,
  errors,
}: FormModalTypes) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal show={open} onHide={handleClose} style={{ paddingTop: 80 }}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {loading ? (
        <div className="d-flex justify-content-center py-5">
          <CircularProgress />
        </div>
      ) : (
        <Modal.Body>
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
          </form>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          disabled={loading}
          title="Cancel"
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        />
        <Button
          disabled={loading}
          onClick={submitFields}
          title="Submit"
          type="submit"
          className="btn btn-primary"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
