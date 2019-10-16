import React from 'react';

// const element = <div>{formtName(this.user)}</div>
//组件传值
function formtName (user){
    console.log(user)
    return user.name +user.age
}
class  Header extends React.Component {
    render () {
        return <div >header ;{formtName(this.props.user)}</div>
    }
}

export default Header
