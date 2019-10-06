import React, { Component } from 'react'

class UserDatail extends Component {


    render() {
       
        return (
            <div>编辑页面
                +{this.props.match.params.id}
            </div>
        )
    }
}

export default UserDatail;