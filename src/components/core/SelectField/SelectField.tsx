import { SelectFieldTypes } from "./types";

const SelectField = ({ register, field, error }: SelectFieldTypes) => {
  return (
    <div>
      <p className="m-1" style={{ fontSize: 12 }}>
        {field.label}
      </p>
      <select className="form-select" id="" {...register(field.name)}>
        {field.options?.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2" style={{ color: "red", fontSize: 12 }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
