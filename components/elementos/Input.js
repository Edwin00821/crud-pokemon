import React from "react";
import {
  Input,
  Label,
  GrupoInput,
  LeyendaError,
  IconoValidacion,
} from "./../elementos/Formularios";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({
  state,
  stateParticular,
  setState,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  regExp,
  funcion,
}) => {
  const onChange = (e) => {
    setState({ ...state, [name]: { ...stateParticular, field: e.target.value } });
  };

  const validacion = () => {
    if (regExp) {
      if (regExp.test(stateParticular.field)) {
        setState({ ...state, [name]: { ...stateParticular, valid: "true" } });
      } else {
        setState({ ...state, [name]: { ...stateParticular, valid: "false" } });
      }
    }

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
    <div>
      <Label htmlFor={name} valido={stateParticular.valid}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={stateParticular.field}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={stateParticular.valid}
        />
        <IconoValidacion
          icon={stateParticular.valid === "true" ? faCheckCircle : faTimesCircle}
          valido={stateParticular.valid}
        />
      </GrupoInput>
      <LeyendaError valido={stateParticular.valid}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;
