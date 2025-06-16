import { JSX } from "react";

export type ModalTyes = {
  isModalOpen: boolean;
  handleCancel: () => void;
  children: JSX.Element;
  title: string;
};
export type ModifyUserTypes = {
  handleCancel: () => void;
  handleOk: () => void;
  item: any;
};
export type ConfirmationTypes = {
  msg: string;
  handleCancel: () => void;
  handleDelete: () => void;
};
