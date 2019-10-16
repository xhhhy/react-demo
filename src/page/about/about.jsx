import React from 'react';
import ReactDOM from "react-dom"

const number = [1,2,3,6]
function NumberList(props) {
  console.log(props)
  const numbers = props.number;
  const listItems = numbers.map((number,i) =>
    <li key={i}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


class About extends React.Component {
  
  constructor(props) {
    //在构造函数中使用时，super关键字将单独出现，并且必须在使用this关键字之前使用。super关键字也可以用来调用父对象上的函数。
    super(props);
    this.state = { date: new Date() ,isToggleOn: true};
    //改变this 指向 使this 指向constructor
    this.showtitle = this.showtitle.bind(this);
  }
  //钩子函数
  /*componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout,setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
  componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
  shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
  可以在你确认不需要更新组件时使用。
  componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
  componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
  componentWillUnmount在组件从 DOM 中移除之前立刻被调用。*/
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      9999999999999999
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });

  }
  showtitle(){
    this.props.history.push("/")
    console.log(this)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.showtitle}>{this.state.isToggleOn?"yes":"no"}</button>
        <ul><NumberList number={number}/></ul>
      </div>
    );
  }
}
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <About/>,
  document.getElementById('root')
);





export default About
