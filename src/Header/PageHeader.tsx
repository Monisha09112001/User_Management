import { CustomButton } from "../Components/CustomButton";
import { HeaderTypes } from "./Header.types";
import styles from "./Header.module.css";
import { CustomInput } from "../Components/CustomInput";
import { SearchOutlined } from "@ant-design/icons";

export const PageHeader = ({ heading, onClick,value,handleSearch }: HeaderTypes) => {
  return (
    <section>
      <div className={styles.headerContainer}>
        <p>{heading}</p>
        <div className={styles.searchbosContainer}>
          <CustomInput
          value={value}
          onChange={(e)=>{handleSearch(e.target.value)}}
          placeholder="Search User"
          required={false}
          suffix={<SearchOutlined/>}

          />
          <CustomButton btnName="Create User" onClick={onClick} />
        </div>
      </div>
    </section>
  );
};
