import { JSX } from "react"

export type ModalTyes={
    isModalOpen:boolean
    handleOk:()=>void
    handleCancel:()=>void
    okText:string
    cancelText:string
    children:JSX.Element
}