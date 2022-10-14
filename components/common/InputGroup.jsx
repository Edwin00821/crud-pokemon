import Input from "./Input";
import Label from "./Label";
import { FaTimesCircle } from "react-icons/fa";
import { classInput, classLabel } from "./../../util/classNames";

export default function InputGroup({
  state,
  stateParticular,
  setState = () => {},
  funcion,
  regExp,
  type = "text",
  placeholder = "Placeholder",
  name = "name",
  error = "",
  label = "Label",
  className = "",
  classNameInput = classInput,
  classNameLabel = classLabel,
  required = true,
  disabled = false,
}) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: { ...stateParticular, field: value } });
  };

  const validate = () => {
    console.log("validate", regExp);
    if (regExp) {
      if (regExp.test(stateParticular.field)) {
        setState({ ...state, [name]: { ...stateParticular, valid: "true" } });
      } else {
        setState({ ...state, [name]: { ...stateParticular, valid: "false" } });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div className={`${className}`}>
      <Label htmlFor={name} className={classNameLabel}>
        {label}
      </Label>
      <div className="relative z-50">
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={stateParticular.field}
          valid={stateParticular.valid}
          onChange={onChange}
          onKeyUp={validate}
          onBlur={validate}
          className={`${classNameInput}`}
          disabled={disabled}
          required={required}
        />
        {error && (
          <div className="flex items-center text-red-500 text-sm font-bold mt-2">
            <FaTimesCircle className="mr-2" />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
