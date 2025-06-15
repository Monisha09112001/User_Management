import { ColumnsType } from "antd/es/table";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

export type TableTypes={
    columns:ColumnsType<DataType>
    data:DataType[]
}