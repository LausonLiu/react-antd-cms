import React, { Component } from 'react'
import { Card, Button,List,Avatar,Badge } from "antd"

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


export default class Notify extends Component {
    render() {
        return (
            <div>
                <Card title="通知中心" extra={<Badge dot><Button type="default">全部标记为已读</Button></Badge>}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item extra={<Badge dot><Button type="default">标记为已读</Button></Badge>} dot>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />,
                </Card>
            </div>
        )
    }
}
