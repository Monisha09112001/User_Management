import { Modal } from "antd";
import { ModalTyes } from "./Modal.types";

export const CustomModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  okText,
  cancelText,
  children,
}: ModalTyes) => {
  return (
    <Modal
      title="Basic Modal"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </Modal>
  );
};
