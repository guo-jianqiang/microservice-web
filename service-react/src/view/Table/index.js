import React from 'react'
import {Table} from 'antd'
import Slide from '../../component/Slide/Slide'
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const MyTable = () => {
  return (<div>
    <Slide>
      {/*<div><Table dataSource={dataSource} columns={columns} /></div>*/}
      <div style={{fontSize: 30, height: 400, background: '#FFB6C1', textAlign: 'center', lineHeight: '400px'}}>1</div>
      <div style={{fontSize: 30,height: 400, background: '#1E90FF', textAlign: 'center', lineHeight: '400px'}}>2</div>
      <div style={{fontSize: 30,height: 400, background: '#FFA500', textAlign: 'center', lineHeight: '400px'}}>3</div>
    </Slide>
  </div>)
}

export default MyTable