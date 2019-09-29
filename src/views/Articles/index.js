import React, { Component } from 'react'
import { Card, Button, Table, Tag, Tooltip, Modal } from 'antd';
import getTopics from "../../api"
import XLSX from "xlsx"

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

];

const mapFieldToCN = {
    id: "序号",
    title: "标题",
    visit_count: "阅读数",
    create_at: "发布日期",
    author: "作者",
}

// const sheet = XLSX.utils.table_to_sheet($('table')[0]);
// openDownloadDialog(sheet2blob(sheet),'导出.xlsx')

export default class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            total: 100,
            columns: [],
            isLoading: false,
            page:1,
            pageSize:5
        }
    }

    updateHandler = (record) => {
        console.log("admin/articles/edit/" + record.id);
        this.props.history.push("/admin/articles/edit/" + record.id)
    }

    deleteHandler = (record) => {
        // console.log(record);
        Modal.confirm({
            title: "删除操作",
            content: "请确认是否删除" + record.title,
            onCancel: () => {
                console.log("取消删除");

            },
            onOk: () => {
                console.log("删除成功");

            }
        })
    }

    getArticleTopics = (page, limit) => {

        this.setState({
            isLoading: true
        })
        getTopics(page, limit).then(res => {

            var rs = []
            for (let i = 0, length = res.data.length; i < length; i++) {
                var temp = {
                    id: res.data[i]["id"],
                    title: res.data[i]["title"],
                    visit_count: res.data[i]["visit_count"],
                    create_at: res.data[i]["create_at"],
                    author: res.data[i]["author"]["loginname"],
                }

                rs.push(temp);
            }

            var first = rs[0];
            var keys = Object.keys(first);
            var columns = keys.map(item => {
                if (item === "visit_count") {
                    return {
                        title: mapFieldToCN[item],
                        dataIndex: item,
                        key: item,
                        render: (text, record, index) => {
                            return (
                                <Tooltip title={record.visit_count >= 1000 ? "阅读数超过一千" : "阅读数小于1千"}>
                                    <Tag color={record.visit_count >= 1000 ? "red" : "green"}>{record.visit_count}</Tag>
                                </Tooltip>
                            )
                        }
                    }
                }

                return {
                    title: mapFieldToCN[item],
                    dataIndex: item,
                    key: item
                }
            })

            columns.push({
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record, index) => {
                    // console.log(text, record, index);
                    return (
                        <ButtonGroup>
                            <Button type="primary" size="small" onClick={this.updateHandler.bind(this, record)}>修改</Button>
                            <Button type="danger" size="small" onClick={this.deleteHandler.bind(this, record)}>删除</Button>
                        </ButtonGroup>
                    )
                }
            })
            // console.log(cloumns);

            this.setState({
                dataSource: rs,
                columns
            })

        }).catch(error => {
            console.log(error);
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    componentDidMount() {

        this.getArticleTopics(this.state.page, this.state.pageSize);
    }

    changePage = (page, pageSize) => {
        console.log(page, pageSize)
        this.setState({
            page,
            pageSize
        })
        this.getArticleTopics(this.state.page, this.state.pageSize);
    }

    render() {
        return (
            <div>
                <Card title="文章列表" extra={<Button type="primary">导出Excel</Button>}>
                    <Table
                        loading={this.state.isLoading}
                        rowKey={rowKey => rowKey.id}
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                        pagination={{ total: this.state.total, pageSize: this.state.pageSize, current: this.state.page, onChange: this.changePage }}
                    />
                </Card>
            </div>
        )
    }
}
