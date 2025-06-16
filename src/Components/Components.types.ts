export type InputTypes = {
  value: string;
  onChange: (e:any) => void;
  size?: "large" | "middle" | "small";
  placeholder: string;
  Prefix?:any
  error?:string
  label?:string
  required:boolean
  suffix?:any
};
export type ButtonTypes = {
  btnName: string;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  onClick: () => void;
  size?: "large" | "middle" | "small";
  style?:any
  
};
export type CheckboxType={
  checked:boolean
  disabled:boolean
  onChange:()=>void
  label:string
  style:any
}
