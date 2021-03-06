import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Card } from 'antd';
import "../../assets/styles/login.less"

@Form.create({ name: '登录界面' })
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        //   console.log(this.props.match.params.id);
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row type="flex" align="middle">
                    <Col span={8} offset={8} className="my-login-col"> 
                        <Card   title="用户登录" extra={ <Button type="danger" onClick={ this.props.history.goBack } >忘记密码</Button> }>
                        <Form className="login-form" onSubmit={this.handleSubmit} >
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的标题' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '清楚如最哦这' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
          </Button>
                            </Form.Item>
                        </Form>
                        </Card>
                    </Col>
                </Row>

            </div>


        );
    }
}
;
export default Login