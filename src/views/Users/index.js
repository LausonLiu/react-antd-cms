import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Card, Button, Table, Divider} from 'antd';

var _this;
const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        render: id => <Link to={"/admin/users/detail/"+ id } >{id}</Link>,      //跳转至用户详情界面
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
                <Button type="primary" size="small">修改</Button>
                <Divider type="vertical" />
                <Button type="danger" size="small" onClick={ () => {delUser(_this,record)} }>删除</Button>
            </span>
        ),
    },
];

//定义删除操作函数
const delUser = (_this,record) => {
    //过滤选中的用户数据
    _this.setState({
        userList:_this.state.userList.filter( item => {
            return item.id !== record.id;
        } )
    }, () => {localStorage.setItem("userskey", JSON.stringify(_this.state.userList))});     //修改本地存储
}

export default class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            userList:[]     //定义表格展示数据（用户数据）
        }
    }

    componentDidMount() {
        //声明_this传递给删除操作
        _this = this;   
        //获取本地存储数据并赋值给state
        const UserData = localStorage.getItem("userskey") ? JSON.parse(localStorage.getItem("userskey")) : [];
        this.setState({
            userList: UserData
        })
    }

    //antd卡片组件和表格组件渲染
    render() {
        return (
            <div>
                <Card title="用户列表" extra={<Button icon="plus" onClick={() => { this.props.history.push("/admin/users/useradd") }}>添加用户</Button>} >
                    <Table columns={columns} dataSource={this.state.userList} />
                </Card>
            </div>
        )
    }
}


