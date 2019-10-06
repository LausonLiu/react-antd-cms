import React, { Component } from 'react'

import { Form, Input, Button } from 'antd';

import Utils from "../../utils/uuid"

class UserAdd extends Component {

    handleSubmit = e => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // if (!err) {
            //     console.log('Received values of form: ', values);
            // }
            if (values.username.trim() === "" || values.email.trim() === "") {
                alert("输入内容不能为空");
                return
            }

            const userInfo = {
                id: Utils.createUUID(),
                name: values.username,
                email: values.email
            }
            // console.log(userInfo);

            const key = "userskey";
            const UserData = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

            UserData.push(userInfo);
            localStorage.setItem(key, JSON.stringify(UserData));

            this.props.history.push("/admin/users");

        });

    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="用户名">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your 用户名!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your 邮箱!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        提交
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedApp = Form.create({ name: 'coordinated' })(UserAdd);
export default WrappedApp
// ReactDOM.render(<FormDemo />, mountNode);