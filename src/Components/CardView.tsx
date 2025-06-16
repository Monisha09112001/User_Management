import { Col, Row } from "antd";
import styles from "./CardView.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const CardView = ({ dataList,handleEdit,handleDelete }: { dataList: any,
    handleEdit:(e:any)=>void,handleDelete:(e:any)=>void
 }) => {
  return (
    <section>
      <Row className={styles.cardContainer} gutter={[16, 16]}>
        {dataList?.data?.map((ele: any, index: number) => {
          return (
            <Col lg={4} className={styles.cardDesign} key={index}>
              <div className={styles.cardContent}>
                <img
                  className={styles.imagStyle}
                  src={ele?.avatar}
                  alt="avatar"
                />
                <p>
                  {ele?.first_name} {ele?.last_name}
                </p>
                <p>{ele?.email}</p>
                <div className={styles.iconOverlay}>
                  <div className={`${styles.iconBtn} ${styles.edit}`}
                  onClick={()=>handleEdit(ele)}
                  >
                    <EditOutlined />
                  </div>
                  <div className={`${styles.iconBtn} ${styles.delete}`}
                  onClick={()=>handleDelete(ele)}
                  
                  >
                    <DeleteOutlined />
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
