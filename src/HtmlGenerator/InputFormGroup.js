import React from "react";
import classname from "classnames";

const InputFormGroup = ({ label, type, name, onChange, value, error }) => {
  return (
    <div className="from-group">
      <label htmlFor="name">{label}</label>

      <input
        type={type}
        className={classname("form-control form-control-lg ", {
          "is-invalid": error
        })}
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">Worng !!! {error}</div>}
    </div>
  );
};

export default InputFormGroup;
