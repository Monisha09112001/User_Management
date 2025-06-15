import { Table } from "antd"
import {  TableTypes } from "./Table.types"

export const CustomTable=({columns,data}:TableTypes)=>
{
return(
    <Table columns={columns} dataSource={data} />
)
}
