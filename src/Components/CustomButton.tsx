import { Button } from "antd";
import { ButtonTypes } from "./Components.types";

export const CustomButton = ({
  btnName,
  type = "default",
  onClick,
}: ButtonTypes) => {
  return (
    <Button type={type} onClick={onClick}>
      {btnName}
    </Button>
  );
};
