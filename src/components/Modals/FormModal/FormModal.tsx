import { CircularProgress } from "@mui/material";
import Form from "react-bootstrap/Form";
import Button from "../../core/Button/Button";
import InputField from "../../core/InputField/InputField";
import SelectField from "../../core/SelectField/SelectField";
import { FormModalTypes } from "./types";
import Modal from "react-bootstrap/Modal";
import BranchSelector from "../../sections/Branch/BranchSelector/BranchSelector";
import { useEffect, useState } from "react";

const FormModal = ({
  open,
  setOpen,
  loading,
  submitFields,
  setValue,
  title,
  fields,
  register,
  errors,
  defaultValues,
  branchSelector,
}: FormModalTypes) => {
  const handleClose = () => setOpen(false);
  const [branchId, setBranchId] = useState("");
  console.log(errors, "error");

  useEffect(() => {
    if (setValue) setValue("branch", branchId);
  }, [branchId, setValue]);

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
          <form className="d-flex flex-column gap-4 my-2">
            {branchSelector && (
              <BranchSelector
                setBranchId={setBranchId}
                errorMessage={errors.branch ? errors.branch.message : undefined}
              />
            )}
            {fields.map((field, index) => {
              if (field.type === "select") {
                return (
                  <SelectField
                    field={field}
                    register={register}
                    error={errors[field.name]?.message}
                  />
                );
              } else if (field.type === "file") {
                return (
                  <div key={index}>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>{field.label}</Form.Label>
                      <Form.Control type="file" {...register(field.name)} />
                    </Form.Group>

                    <span className="text-danger">
                      <> {errors[field.name]?.message}</>
                    </span>
                  </div>
                );
              }
              return (
                <InputField
                  defaultValue={
                    defaultValues
                      ? defaultValues[field.name as keyof typeof defaultValues]
                      : ""
                  }
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
          onClick={handleClose}
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
