import React from 'react';
import { Button ,Spin, Alert} from 'antd';
import Api from '../../API/api';
const FancyButton = React.forwardRef((props,ref)=>{
    return <button className="FancyButton">{props.children}</button>
})
const ref = React.createRef()

console.log(FancyButton)

// const element = <div>{formtName(this.user)}</div>
//组件传值
function formtName (user){
    //console.log(user)
    return user.name +user.age
}

class  TrData  extends React.Component{
    constructor(props){
      super(props);
    }
  render(props){
    return this.props.user.map(user=>{
      return <tr key={user.id} className="text-center">
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.name}</td>
          <td>{user.sex}</td>
          </tr>
      })
    
  }
}
////React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
class Frag extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div>Hello</div>
          <div>World</div>
        </React.Fragment>
    );
  }
}
class  Header extends React.Component {
    constructor(props){
        super(props)
        this.state={
          users:[],
          isLoaded:false
        }
    }
    componentDidMount=()=>{
      let that = this
        try{
           Api.getData().then(res=>{
             console.log(res)
             that.setState({
               user :res.slice(98),
               loading:true
            })
          })
            // console.log(result)
          }catch(err){
            // console.error(err);
          }
    }
    render () {
      if(!this.state.loading){
         return  <Spin tip="Loading...">
         <Alert
           message="Alert message title"
           description="Further details about the context of this alert."
           type="info"
         />
       </Spin>
      }else{
        return(          
        <div >header ;{formtName(this.props.user)}
          <Button type="primary" block>
            Primary
            </Button>
            <Button block></Button>
            <Button type="dashed" block>
            Dashed
            </Button>
            <Button type="danger" block>
            Danger
            </Button>
            <Button type="link" block>
            Link
            </Button>
            <table className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">姓名</th>
                <th className="text-center">年龄</th>
                <th className="text-center">性别</th>
              </tr>
            </thead>
          <tbody>
            <TrData user={this.state.user}/>
          </tbody>
          </table>
          <div>
              { [1,2,3].map(res=>{
                   return  <Button key={res}>{res}</Button>
              })
              }
        </div>

            <FancyButton ref={ref}>Click me!</FancyButton>
        <div>
             
        </div>
              <Frag />
        </div>


        )}
        
    }
}
export default Header
