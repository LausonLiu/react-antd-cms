import React, { Component } from 'react'
import { Card, Button, List, Avatar, Badge } from "antd"
import { setAllUnread, setSingleUnread } from "../../store/actionTypes"
import { connect } from "react-redux"

// const data = [
//     {
//         title: 'Ant Design Title 1',
//     },
//     {
//         title: 'Ant Design Title 2',
//     },
//     {
//         title: 'Ant Design Title 3',
//     },
//     {
//         title: 'Ant Design Title 4',
//     },
// ];


class Notify extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        // this.unsubscribe = this.props.subscribe( () => {
        //     this.setState({
        //         unreadNum: this.props.getState().unreadNum
        //     })
        // } )
    }

    componentDidMount() {
        // this.unsubscribe();
    }

    // countUnreadNum(){
    //     return this.props.readList.reduce( (prev, next) => {
    //         return prev + (next.isRead ? 0 : 1)
    //     }, 0)
    //     // return 3;
    // }

    render() {
        return (
            <div>
                <Card title="通知中心"
                    extra={
                        // <Badge count={ this.countUnreadNum() } >
                            <Button type="default" onClick={() => { this.props.setAllUnread() }}>全部标记为已读</Button>
                        // </Badge>
                    }>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.readList}
                        renderItem={item => (
                            <List.Item extra={
                            <Badge dot={!item.isRead} >
                                <Button type="default" onClick={() => { this.props.setSingleUnread(item.id)}}>标记为已读</Button>
                                </Badge>
                            } >
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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        readList: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         mapSetAllUnread:()=>{
//             dispatch(setAllUnread())
//         },
//         mapSetSingleUnread:(id)=>{
//             dispatch(setSingleUnread(id))
//         }
//     }
// }

export default connect(mapStateToProps,{setAllUnread,setSingleUnread})(Notify)