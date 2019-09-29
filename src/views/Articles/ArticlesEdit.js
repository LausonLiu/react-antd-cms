import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import { Form, Icon, Input, Button, Row, Col, Card } from 'antd';

@withRouter
@Form.create({ name: '文章编辑' })
class ArticlesEdit extends Component {
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
                <Row>
                    <Col span={16} offset={4}> 
                        <Card title="文章详情" extra={ <Button type="danger" onClick={ this.props.history.goBack } >取消更改</Button> }>
                        <Form onSubmit={this.handleSubmit} className="login-form">
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
                                    保存更改
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
export default ArticlesEdit