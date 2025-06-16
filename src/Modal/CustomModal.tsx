import { Modal } from "antd";
import { ModalTyes } from "./Modal.types";

export const CustomModal = ({
  isModalOpen,
  handleCancel,
  children,
  title
}: ModalTyes) => {
  return (
    <Modal
      title={title}
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}

    >
      {children}
    </Modal>
  );
};
