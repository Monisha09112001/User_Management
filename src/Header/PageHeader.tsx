import { CustomButton } from "../Components/CustomButton";
import { HeaderTypes } from "./Header.types";
import styles from "./Header.module.css";

export const PageHeader = ({ heading, onClick }: HeaderTypes) => {
  return (
    <section>
      <div className={styles.headerContainer}>
        <p>{heading}</p>
        <div>
          <CustomButton btnName="Create User" onClick={onClick} />
        </div>
      </div>
    </section>
  );
};
