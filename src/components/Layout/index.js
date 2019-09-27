import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter } from "react-router-dom"
import {privateRoutes} from "../../routers"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const topMenus = privateRoutes.filter( item => {
  return item.isTop
} );


@withRouter
class MyLayout extends Component {
    
  menusHandler = ({ item, key, keyPath, domEvent }) => {
    	// console.log(item, key, keyPath, domEvent);
      // console.log(this.props.history);
      this.props.history.push(key)
      
  }

  render() {
        return (
            <Layout style={{ minHeight:"100%"}}>
            <Header className="header">
              <div className="logo" />
                <h1 style={{ color: "#fff"} }>CMS管理系统</h1>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  onClick={ this.menusHandler }
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  { topMenus.map( item => {
                    return <Menu.Item key={ item.pathname }><Icon type={ item.icon } />{ item.title }</Menu.Item>
                  } ) }
                   {/* <Menu.Item key="1"><Icon type="laptop" />表盘</Menu.Item>
                    <Menu.Item key="2"><Icon type="notification" />文章管理</Menu.Item>
                    <Menu.Item key="3"><Icon type="setting" />设置</Menu.Item> */}
                </Menu>
              </Sider>
              <Layout style={{ padding: '24px' }}>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  { this.props.children }
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )
    }
}

export default MyLayout;