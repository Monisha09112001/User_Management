import { useEffect, useState } from "react";
import { PageHeader } from "../../Header/PageHeader";
import { CustomTable } from "../../Table/CustomTable";
import { getLocalStorageData, UseToken } from "../../Utilities/Methods";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/Config/Store";
import {
  DeleteUser,
  getListUser,
  UpdateUserID,
} from "../../Store/Reducers/MainReducer";
import { CustomButton } from "../../Components/CustomButton";
import styles from "./HomeScreen.module.css";
import { CustomModal } from "../../Modal/CustomModal";
import { ModifyUser } from "../../Modal/ModifyUser";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { BarsOutlined, TableOutlined } from "@ant-design/icons";
import { CustomSegmented } from "../../Components/CustomSegmented";
import { CardView } from "../../Components/CardView";

export const UserManagement = () => {
  const token = UseToken();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, userData } = useSelector((state: any) => state.main);
  const [show, setShow] = useState({
    status: false,
    item: null,
    isCreate: false,
  });
  const [deleteItem, setDeleteItem] = useState<{ status: boolean; item: any }>({
    status: false,
    item: null,
  });
  const [option, setOption] = useState("Table");
  const [filter, setfilter] = useState("");
  const userListData = getLocalStorageData("user");
  const { data, page, total } = userListData || {};
  const [filterdList, setFilteredList] = useState([]);

  const Segmentedoptions = [
    { label: "Table", value: "Table", icon: <TableOutlined /> },
    { label: "Card", value: "Card", icon: <BarsOutlined /> },
  ];

  useEffect(() => {
    if (token && !data?.length && !userData?.data?.length) {
      getListofUsers(1, filter);
    }
  }, [token]);

  const columns = [
    {
      title: "#",
      dataIndex: "avatar",
      render: (text: any) => {
        return (
          <>
            <img src={text} className={styles.imageStyle} alt="avatar" />
          </>
        );
      },
      key: "avatar",
      className: "tableContentCenter",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text: string) => {
        return <>{text ? <a href={`mailto:${text}`}>{text}</a> : "-"}</>;
      },
      key: "email",
      className: "tableWidth",
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      render: (text: any) => (text ? text : "-"),
      key: "first_name",
      className: "tableWidth",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      render: (text: any) => (text ? text : "-"),
      key: "last_name",
      className: "tableWidth",
    },

    {
      title: "Action",
      render: (item: any) => (
        <div style={{ display: "flex", gap: 10 }}>
          <CustomButton
            btnName="Edit"
            onClick={() => {
              setShow({ status: true, item: item, isCreate: false });
            }}
            style={{ background: "#186eba", color: "white" }}
          />
          <CustomButton
            btnName="Delete"
            onClick={() => {
              setDeleteItem({ status: true, item: item });
              dispatch(UpdateUserID(item?.id));
            }}
            style={{ background: "red", color: "white" }}
          />
        </div>
      ),
      key: "address",
      className: "tableWidth",
    },
  ];

  const getListofUsers = (page = 1, filter = "") => {
    dispatch(getListUser({ page, data: filter }));
  };

  const handleDelete = async () => {
    const isdeleted = await dispatch(
      DeleteUser({ UserID: deleteItem?.item?.id })
    );
    if (DeleteUser.fulfilled.match(isdeleted)) {
      dispatch(getListUser({ page: 1, data: filter }));
      setDeleteItem({ status: false, item: null });
    }
  };

  const handleCallListUser = (page = 1, filter = "") => {
    const rawData = localStorage.getItem("user");
    if (!rawData) return [];

    const parsed = JSON.parse(rawData);
    const fullList = parsed?.data ?? [];

    const filteredList = filter
      ? fullList.filter(
          (item: any) =>
            item.first_name.toLowerCase().includes(filter.toLowerCase()) ||
            item.first_name.toLowerCase().includes(filter.toLowerCase())
        )
      : fullList;

    // Pagination logic
    const perPage = 6;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    const paginatedData = filteredList.slice(start, end);

    return paginatedData;
  };

  const handleSearch = (value: string) => {
    let filterdList = data?.filter((ele: any) => {
      return (
        ele?.first_name?.toLowerCase().includes(value.toLowerCase()) ||
        ele?.last_name?.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredList(filterdList);
  };

  return (
    <>
      <div className="containerBg">
        <PageHeader
          heading="User"
          onClick={() => setShow({ status: true, item: null, isCreate: true })}
          handleSearch={(e: any) => {
            setfilter(e);
            handleSearch(e);
          }}
          value={filter}
        />
        <CustomSegmented
          options={Segmentedoptions}
          onChange={(value: any) => {
            setOption(value);
          }}
          value={option}
        />
        {option === "Table" ? (
          <CustomTable
            columns={columns}
            dataList={
              filter
                ? { ...userListData, data: [...filterdList] }
                : userListData
            }
            handleListapi={(page) => {
              handleCallListUser(page, filter);
            }}
            filters={filter}
          />
        ) : (
          <CardView
            dataList={
              filter
                ? { ...userListData, data: [...filterdList] }
                : userListData
            }
            handleEdit={(ele) => {
              setShow({ status: true, item: ele, isCreate: false });
              handleSearch(filter);
            }}
            handleDelete={(ele) => {
              setDeleteItem({ status: true, item: ele });
              handleDelete();
            }}
          />
        )}
      </div>

      <CustomModal
        isModalOpen={show?.status}
        handleCancel={() => {
          setShow({ status: false, item: null, isCreate: false });
        }}
        title={show?.isCreate ? "Create New User" : "Edit User"}
      >
        <ModifyUser
          handleCancel={() =>
            setShow({ status: false, item: null, isCreate: false })
          }
          handleOk={() => {
            setShow({ status: false, item: null, isCreate: false });
            handleSearch(filter);
          }}
          item={show.item}
        />
      </CustomModal>

      <CustomModal
        handleCancel={() => setDeleteItem({ item: null, status: false })}
        isModalOpen={deleteItem?.status}
        title="Confirmation"
      >
        <ConfirmationModal
          msg="Are you sure do you want to delete the user?"
          handleCancel={() => setDeleteItem({ status: false, item: null })}
          handleDelete={handleDelete}
        />
      </CustomModal>
    </>
  );
};
