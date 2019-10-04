import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, Row, Col, Avatar, Badge } from 'antd';
import { withRouter } from "react-router-dom"
import { privateRoutes } from "../../routers"
import { connect } from "react-redux"

const { Header, Content, Sider } = Layout;

const topMenus = privateRoutes.filter(item => {
  return item.isTop
});


@withRouter
class MyLayout extends Component {

  menusHandler = ({ item, key, keyPath, domEvent }) => {
    // console.log(item, key, keyPath, domEvent);
    // console.log(this.props.history);
    this.props.history.push(key)
  }

  countUnreadNum() {
    return this.props.readList.reduce((prev, next) => {
      return prev + (next.isRead ? 0 : 1)
    }, 0)
    // return 3;
  }

  menus = () => {
    return (
      <Menu onClick={this.menusHandler}>
        <Menu.Item key="/admin/notify">
          <Badge dot>通知中心</Badge>
        </Menu.Item>
        <Menu.Item key="/admin/setting">
          个人设置
      </Menu.Item>
        <Menu.Item key="/login">
          退出登录
      </Menu.Item>
      </Menu>
    );
  }
  render() {
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header className="header">
          <Row>
            <Col span={8}>
              <h1 style={{ color: "#fff" }}>CMS管理系统</h1>
            </Col>
            <Col span={3} offset={13} >
              <Badge count={this.countUnreadNum()} offset={[5, 0]}>
                <div>
                  <Dropdown overlay={this.menus()}>
                    <div style={{ color: "#fff" }}>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />欢迎光临<Icon type="down" />
                    </div>
                  </Dropdown>
                </div>
              </Badge>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              onClick={this.menusHandler}
              mode="inline"
              selectedKeys={[this.props.location.pathname]}
              style={{ height: '100%', borderRight: 0 }}
            >
              {topMenus.map(item => {
                return <Menu.Item key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>
              })}
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
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    readList: state
  }
}

export default connect(mapStateToProps)(MyLayout);