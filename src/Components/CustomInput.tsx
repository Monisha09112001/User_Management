import { Input } from "antd";
import { InputTypes } from "./Components.types";

export const CustomInput = ({
  value,
  onChange,
  size = "large",
  placeholder,
}: InputTypes) => {
  return (
    <>
      <Input
        size={size}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
