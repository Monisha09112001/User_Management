import { Pagination, Table } from "antd";
import { TableTypes } from "./Table.types";
import styles from "./Table.module.css";

export const CustomTable = ({
  columns,
  dataList,
  handleListapi,
  filters,
}: TableTypes) => {
  return (
    <>
      <div className={`${styles.tableContainer} ${styles.tableBoxsize}`}>
      <Table columns={columns} dataSource={dataList?.data} 
      pagination={false}
/>
    
    </div>
    <div className={styles.paginatoinContainer}>

      <Pagination
        current={dataList?.page}
        onChange={(e) => {
          handleListapi(e, filters ? filters : null);
        }}
        showSizeChanger={false}
        pageSize={10}
        total={dataList?.total}
        
      />
    </div>

    </>
  
  );
};
