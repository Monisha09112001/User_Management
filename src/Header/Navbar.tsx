import { LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../Utilities/Methods";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className={styles.narBar}>
          <p>Elon Musk</p>
          <div
            className={styles.logoutBg}
            onClick={() => {
              clearLocalStorage()
              window.location.reload();
            }}
          >
            <LogoutOutlined />
          </div>
        </div>
      </section>
    </>
  );
};
