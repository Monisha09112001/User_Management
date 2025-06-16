import { Input } from "antd";
import { InputTypes } from "./Components.types";

export const CustomInput = ({
  value,
  onChange,
  size = "large",
  placeholder,
  Prefix,
  error,
  label,
  required=true,
  suffix
}: InputTypes) => {
  return (
    <>
      <div>
       {label? <p><span style={{color:"red"}}>{required?"*":""}</span>{label}</p>:null}
        <Input
          size={size}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          prefix={Prefix}
          suffix={suffix}
        />
        <p className="errorText">{error}</p>
      </div>
    </>
  );
};
