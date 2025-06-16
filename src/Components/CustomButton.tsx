import { Button } from "antd";
import { ButtonTypes } from "./Components.types";

export const CustomButton = ({
  btnName,
  type = "default",
  onClick,
  size,
  style
}: ButtonTypes) => {
  return (
    <Button type={type} onClick={onClick}
    size={size}
    style={style}
    className="buttonStyle"
    >
      {btnName}
    </Button>
  );
};
