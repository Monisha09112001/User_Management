import { Input } from "antd";
import { InputTypes } from "./Components.types";

export const CustomInput = ({
  value,
  onChange,
  size = "large",
  placeholder,
  Prefix,
  error,
  label
}: InputTypes) => {
  return (
    <>
      <div>
        <p><span style={{color:"red"}}>*</span>{label}</p>
        <Input
          size={size}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          prefix={Prefix}
        />
        <p className="errorText">{error}</p>
      </div>
    </>
  );
};
