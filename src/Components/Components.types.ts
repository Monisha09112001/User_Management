export type InputTypes = {
  value: string;
  onChange: () => void;
  size: "large" | "middle" | "small";
  placeholder: string;
};
export type ButtonTypes = {
  btnName: string;
  type: "primary" | "dashed" | "link" | "text" | "default";
  onClick: () => void;
};

