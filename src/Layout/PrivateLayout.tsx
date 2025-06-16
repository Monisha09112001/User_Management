import { Outlet } from "react-router-dom";
import { Navbar } from "../Header/Navbar";
import styles from "./Layout.module.css";

export const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layoutBg}>
      <div className={styles.layoutMargin}>
        <Outlet />
      </div>
      </div>
    
    </>
  );
};
