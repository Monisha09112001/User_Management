import { Col, Row } from "antd";
import { CustomInput } from "../../Components/CustomInput";
import styles from "./Login.module.css";
import { CustomCheckBox } from "../../Components/CustomCheckBox";
import { useEffect, useState } from "react";
import { CustomButton } from "../../Components/CustomButton";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { CustomInputPassword } from "../../Components/CustomInputPassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { CallLogin } from "../../Store/Reducers/MainReducer";
import { AppDispatch } from "../../Store/Config/Store";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const Login = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, token, error } = useSelector((state: any) => state.main);
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit, setFieldValue, touched } =
    useFormik({
      initialValues: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      validationSchema,
      onSubmit: (values) => {
        handleLogin();
      },
    });

  useEffect(() => {
    if (token) {
      navigate("/usermanagement");
    }
  }, [token]);

  const handleLogin = () => {
    if(values?.email=="eve.holt@reqres.in" && values.password==="cityslicka") 
    {
      dispatch(CallLogin(values));

    } 
    else{
      alert("Email or Password is incorrect")
    }
  };
  console.log(loading,"loading");
  

  return (
    <>
    
      <section>
        <div className={styles.loginMainContainer}>
          <div className={styles.loginBg}>
            <div className={styles.logincontainer}>
              <CustomInput
                value={values.email}
                onChange={(e) => {
                  setFieldValue("email", e.target.value);
                }}
                placeholder="Email"
                Prefix={<UserOutlined />}
                error={errors.email && touched?.email ? errors.email : ""}
              />

              <CustomInputPassword
                value={values.password}
                onChange={(e) => {
                  setFieldValue("password", e.target.value);
                }}
                placeholder="Password"
                Prefix={<LockOutlined />}
                error={
                  errors.password && touched?.password ? errors.password : ""
                }
              />
            </div>
            <div className={styles.remembermeContainer}>
              <CustomCheckBox
                checked={check}
                disabled={false}
                label="Remember me"
                onChange={() => setCheck(!check)}
                style={{ margin: "10px 0" }}
              />
              <CustomButton
                btnName="Log in"
                onClick={handleSubmit}
                size="large"
                style={{
                  height: "45px",
                  background: "#247CC3",
                  borderRadius: "4px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
