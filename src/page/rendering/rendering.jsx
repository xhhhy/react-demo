import React from "react"
import ReactDOM from "react-dom"
 

const isLoggedIn = false


//react 表单以及表单数据提交
class EssayForm  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '123456'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    console.log("handelchange")

  }

  handleSubmit(event) {
    //alert('提交的名字: ' + this.state.value);
    console.log("handelchange")
    //event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        文章:
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="提交" />
    </form>
    );
  }
}



//react 表单以及表单数据提交
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {

    console.log("handelchange")

      //this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    console.log("handelchange")

      //alert('提交的名字: ' + this.state.value);
     // event.preventDefault();
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
      );
    }
  }

class Readring extends React.Component{
    render(){
        //可以直接在标签内写三目运算符 ｛判断？为true时的dom ：为false时的dom｝
        return<div>条件渲染
                <div>
                
                    {isLoggedIn ? (
                        <EssayForm />
                    ) : (
                        <NameForm />
                    )}
                    </div>
                </div> 
        }
}
ReactDOM.render(
    <Readring />,
    document.getElementById('root')
  );

export default Readring