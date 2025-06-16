import { BarsOutlined, TableOutlined } from "@ant-design/icons"
import { Segmented } from "antd"

export const CustomSegmented = ({options,onChange,value}:{options:any[],onChange:(value:any)=>void,value:string})=>
{
    return<>
     <Segmented
    options={options}
    onChange={onChange}
    value={value}
  />
    </>
}