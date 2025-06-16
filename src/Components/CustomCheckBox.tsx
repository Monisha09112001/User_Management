import { Checkbox } from "antd";
import { CheckboxType } from "./Components.types";

export const CustomCheckBox = ({
  checked,
  disabled,
  onChange,
  label,
  style,
}: CheckboxType) => {
  return (
    <p style={style}>
      <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
        {label}
      </Checkbox>
    </p>
  );
};
