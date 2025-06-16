import { ColumnsType } from "antd/es/table";

interface DataType {
    page: number;
    total: number;
    data: any[];
    total_pages:number
  }

export type TableTypes={
    columns:ColumnsType<DataType>
    dataList:DataType
    handleListapi:(page:number,filter:any)=>void
    filters:any
}