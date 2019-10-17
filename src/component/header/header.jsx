import React from 'react';
import { Button } from 'antd';
import Api from '../../API/api';

// const element = <div>{formtName(this.user)}</div>
//组件传值
function formtName (user){
    //console.log(user)
    return user.name +user.age
}
class  Header extends React.Component {
    constructor(props){
        super(props)
      this.componentWillMount= this.componentWillMount.bind(this)
    }
    componentWillMount(){
        try{
            let name ={name:"cccc"}
            // console.log(Api)
            Api.getData(name);
            // console.log(result)
          }catch(err){
            // console.error(err);
          }
    }
    render () {
        return(
        <div >header ;{formtName(this.props.user)}
          <Button type="primary" block>
            Primary
            </Button>
            <Button block>Default</Button>
            <Button type="dashed" block>
            Dashed
            </Button>
            <Button type="danger" block>
            Danger
            </Button>
            <Button type="link" block>
            Link
            </Button>
        </div>


        )
        
    }
}

export default Header
