import React, { Component } from 'react'
import { Card, Button, Table } from 'antd';
import getTopics from "../../api"


const ButtonGroup = Button.Group;
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
    {
        title: '操作',
        dataIndex: 'set',
        key: 'set',
        render: (text, record, index) => {
            // console.log(text, record, index);
            return (
                <ButtonGroup>
                    <Button type="primary">修改</Button>
                    <Button type="danger">删除</Button>
                </ButtonGroup>
            )
        }
    },
];

const mapFieldToCN = {
    id: "序号",
    title: "标题",
    visit_count: "阅读数",
    create_at: "发布日期",
    author: "作者",
}

export default class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            total: 100,
            columns: []
        }
    }

    componentDidMount() {
        getTopics().then(res => {

            var rs = []
            for( let i = 0,length = res.data.length; i < length; i++ ){
                var temp = {
                    id:res.data[i]["id"],
                    title:res.data[i]["title"],
                    visit_count: res.data[i]["visit_count"],
                    create_at: res.data[i]["create_at"],
                    author: res.data[i]["author"]["loginname"],
                }

                rs.push(temp);
            }



            var first = rs[0];
            var keys = Object.keys( first );
            var columns = keys.map( item => {
                // if ( item === "columns") {
                //     return ""
                // }
                return {
                    title: mapFieldToCN[item],
                    dataIndex: item,
                    key: item
                }
            }) 

            // console.log(cloumns);
            
            this.setState({
                dataSource: rs,
                columns
            })

        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Card title="文章列表" extra={<Button type="primary">导出Excel</Button>}>
                    <Table
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                        Pagination={{ total: this.state.total, pageSize: 10, current: 3 }}
                    />;
                </Card>
            </div>
        )
    }
}
