import { Input } from "antd";
import { InputTypes } from "./Components.types";

export const CustomInputPassword = ({
  value,
  onChange,
  size = "large",
  placeholder,
  Prefix,
  error
}: InputTypes) => {
  return (
    <>
    <div>
      <Input.Password
        size={size}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        prefix={Prefix}
        type=""
        visibilityToggle={false}
      />
      <p className="errorText">{error}</p>
      </div>
    </>
  );
};
