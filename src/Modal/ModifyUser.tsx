import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Components/CustomInput";
import styles from "./Modal.module.css";
import { CustomButton } from "../Components/CustomButton";
import { ModifyUserTypes } from "./Modal.types";
import {
  CreateUser,
  getListUser,
  UpdateUser,
} from "../Store/Reducers/MainReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/Config/Store";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Second Name is required"),
  avatar: Yup.string().required("Avatar is required"),
});

export const ModifyUser = ({
  handleCancel,
  handleOk,
  item,
}: ModifyUserTypes) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    setValues,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
      id:""
    },
    validationSchema,
    onSubmit: (values) => {
      if (item) {
        handleEditUser();
      } else {
        handleCreateUser();
      }
    },
  });

  useEffect(() => {
    if (item) {
      setValues({
        email: item?.email || "",
        first_name: item?.first_name || "",
        last_name: item?.last_name || "",
        avatar: item?.avatar || "",
        id:item?.id||""
      });
    }
  }, [item]);

  const handleCreateUser = async () => {
    const resultAction = await dispatch(CreateUser(values));

    if (CreateUser.fulfilled.match(resultAction)) {

      resetForm();
      handleOk();
    }
  };

  const handleEditUser = async () => {
    console.log(item?.id, "item==");

    const resultAction = await dispatch(
      UpdateUser({ values, UserID: item?.id })
    );

    if (UpdateUser.fulfilled.match(resultAction)) {
      resetForm();
      handleOk();
    }
  };

  return (
    <>
      <div className={styles.userFiledContainer}>
        <CustomInput
          value={values.email}
          onChange={(e) => setFieldValue("email", e.target.value)}
          placeholder="Email"
          label="Email"
          error={errors.email && touched.email ? errors.email : ""}
       required
       />
        <CustomInput
          value={values.first_name}
          onChange={(e) => setFieldValue("first_name", e.target.value)}
          placeholder="First Name"
          label="First Name"
          error={
            errors.first_name && touched.first_name ? errors.first_name : ""
          }
        required
        />
        <CustomInput
          value={values.last_name}
          onChange={(e) => setFieldValue("last_name", e.target.value)}
          placeholder="Last Name"
          label="Last Name"
          error={errors.last_name && touched.last_name ? errors.last_name : ""}
        required
        />
        <CustomInput
          value={values.avatar}
          onChange={(e) => setFieldValue("avatar", e.target.value)}
          placeholder="Profile Image Link"
          label="Profile Image Link"
          error={errors.avatar && touched.avatar ? errors.avatar : ""}
      required
      />
      </div>
      <div className={styles.modifyUserBtnContainer}>
        <CustomButton
          btnName="Cancel"
          onClick={() => {
            handleCancel();
            resetForm();
          }}
        />
        <CustomButton
          btnName="Submit"
          onClick={handleSubmit}
          style={{ background: "#186eba", color: "white" }}
        />
      </div>
    </>
  );
};
