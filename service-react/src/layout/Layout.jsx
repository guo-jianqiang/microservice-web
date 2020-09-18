import React from 'react'
import {Layout as AntdLayout, Menu, Breadcrumb} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import routeItems from '../router/routeItems'
const { SubMenu } = Menu;
const {Content, Footer, Sider } = AntdLayout;

const Layout = (props) => {
  const renderMenuItem = (item) => {
    return item.children && item.children.length ? renderSubMenu(item.children) : <Menu.Item key={item.path}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </Menu.Item>
  }
  const renderSubMenu = (item) => {
    return <SubMenu key={item.path} title={item.name}>
      {item.children.map(i => renderMenuItem(i))}
    </SubMenu>
  }
  const renderMenu = () => {
    if (routeItems.length) {
      return (<Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        {
          routeItems.map(item => item.children && item.children.length ? renderSubMenu(item) : renderMenuItem(item))
        }
      </Menu>)
    }
    return <div style={{height: '100%', width: '100%', background: '#fff'}}></div>
  }
  return (<AntdLayout>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <AntdLayout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          {renderMenu()}
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {props.children}
        </Content>
      </AntdLayout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </AntdLayout>)
}

export default Layout