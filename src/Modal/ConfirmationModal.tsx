import { CustomButton } from "../Components/CustomButton";
import { ConfirmationTypes } from "./Modal.types";

export const ConfirmationModal = ({
  msg,
  handleCancel,
  handleDelete,
}: ConfirmationTypes) => {
  return (
    <>
      <p>{msg}</p>
      <div style={{display:"flex",gap:10,marginTop:10,justifyContent:"flex-end"}}>
      <CustomButton btnName="No" onClick={handleCancel} />
      <CustomButton btnName="Yes" onClick={handleDelete} 
      style={{background:"#297DC3",color:"white"}}
      />
      </div>
   
   
    </>
  );
};
