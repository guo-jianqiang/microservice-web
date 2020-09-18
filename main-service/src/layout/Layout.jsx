import React from 'react'
import { Layout as AntdLayout, Menu, Breadcrumb, Spin } from 'antd'
import history from '../router/history'
import {NavLink} from 'react-router-dom'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = AntdLayout;
import {vueRouter} from '../view/vue/Vue'
import appRoutes from '../router/appRoutes'

const pathReg = /(\/\w*)/i
const menuKeyReg = basename => {
  return new RegExp('(?<=\\' + basename + ')' + '(.*\\/?)$')
}

const Layout = (props) => {
  const appKey = history.location.pathname.match(pathReg)[0]
  const [headerBarKey, setHeaderBarKey] = React.useState([appKey])
  const defaultMenuKey = appRoutes[appKey].routes.length ? appRoutes[appKey].routes[0].children[0].path : []
  const [menuKey, setMenuKey] = React.useState(defaultMenuKey)
  const handleClickMenu = (item) => {
    if (appKey + item.path !== history.location.pathname) {
      console.log(item.path)
      setMenuKey([item.path])
      appRoutes[appKey] && appRoutes[appKey].router.push(item.path)
    }
  }
  const renderMenuItem = (item) => {
    return item.children && item.children.length ? renderSubMenu(item.children) : <Menu.Item key={item.path} onClick={() => {
      handleClickMenu(item)
    }}>
      {item.name}
    </Menu.Item>
  }
  const renderSubMenu = (item) => {
    return <SubMenu key={item.path} title={item.name}>
      {item.children.map(i => renderMenuItem(i))}
    </SubMenu>
  }
  const renderMenu = () => {
    if (appRoutes[appKey] && appRoutes[appKey].routes && appRoutes[appKey].routes.length) {
      return (<Menu
        mode="inline"
        selectedKeys={menuKey}
        style={{ height: '100%' }}
      >
        {
          appRoutes[appKey].routes.map(item => item.children && item.children.length ? renderSubMenu(item) : renderMenuItem(item))
        }
      </Menu>)
    }
    return <div style={{height: '100%', width: '100%', background: '#fff'}}>
      <Spin spinning />
    </div>
  }

  React.useEffect(() => {
    setHeaderBarKey([appKey])
  }, [history.location.pathname])

  React.useEffect(() => {
    setMenuKey(history.location.pathname.match(menuKeyReg(appKey)).slice(0, 1))
  }, [history.location.pathname])

  return (<AntdLayout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={headerBarKey}>
        {
          Object.keys(appRoutes).map(key => (
            <Menu.Item key={key} onClick={() => { setHeaderBarKey([key])} }>
              <NavLink
                to={key}
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                {appRoutes[key].name}
              </NavLink>
            </Menu.Item>
          ))
        }
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <AntdLayout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          {
            renderMenu()
          }
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