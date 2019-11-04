import React, { Component } from 'React';
//高阶组件定义
const HOC = (WrappedComponent) =>
  class WrapperComponent extends Component {
      storeRef(ref){
          this.ref= ref
      }
          render() {
        const newProps = {
            nameL:"HOC"
        }
      return <WrappedComponent {...this.props}{...newProps}{...this.ref} />;
    }  
}
//普通的组件
class WrappedComponent extends Component{
    render(){
        console.log(this.props)
        return(<div>123456</div>)
    }
}
//高阶组件使用
export default HOC(WrappedComponent)


class CommentList extends React.Component{
    constructor (props){
        super(props)
        this.handleChange= this.handleChange.bind(this)
        this.state={
            //假设datasource是全局范围数据源变量
            comments:DataSource.getComments()
        }
    }
    componentDidMount(){
         // 订阅更改
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillMount(){
          // 清除订阅
        DataSource.removeChangeListener(this.handleChange)
    }
    handleChange(){
        this.setState({
            comments:DataSource.getComments()
        })
    }
    render(){
        return(
            <div>
                {this.state.comments.map((comment)=>{
                    <Comment comment={comment} key={comment.id}></Comment>
                })}
            </div>
        )
    }

}
class BlogPost extends React.Component(){
    constructor(props){
        super(props)
        this.handleChange= this.handleChange.bind(this)
        this.state ={
            BlogPost:DataSource.getBlogPost(props.id)
        }
    }
    componentDidMount(){
        DataSource.addChangeListener(this.handleChange())
    }
    componentWillMount(){
        DataSource.removeChangeListener(this.handleChange())
    }
    handleChange(){
        this.setState({
            BlogPost:DataSource.getBlogPost(this.props.id)
        })
    }
    render(){
        return(
            <TentBlock text={this.state.BlogPost}></TentBlock>
        )
    }
    
}
const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource=DataSource.getComments())

);
const blogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource,props)=>DataSource.getBlogPost(props,od)
)
 function withSubscription(WrappedComponent,selectData){
     return class extends React.Component{
         constructor(props){
             super(props)
             this.handleChange = this.handleChange.bind(this)
             this.state={
                 data:selectData(DataSource,props)
             }
         }
         componentDidMount(){
             DataSource.addChangeListener(this.handleChange)
         }
         componentWillUnmount(){
             DataSource.removeChangeListener(this.handleChange)

         }
         handleChange(){
             this.setState({
                 data:selectData(DataSource,this.props)
             })
         }
         render(){
             return <WrappedComponent data={this.state.data} {...this.props}></WrappedComponent>
         }
     }
 }


