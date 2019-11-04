import React from 'react';
import { Timeline , Popover, Button} from 'antd';
import "./button.less"
const content = (<div><p>Content</p><p>Content</p> </div>)
function Buttons(props) {
    return <button className="clickbutton" onClick={props.onClick}>Say Hello</button>;
  }
//   $('#container').html('<button id="btn">Say Hello</button>');
// $('#btn').click(function() {
//   alert('Hello!');
// });
//重写为react
class HelloButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"7777777777777777777777"
        }
    }
     handleClick=()=> {
         this.setState({
             name:"888888888888888888"
         })
      alert('Hello!');
    }
    render(){
        return (<div>
             <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
            </Popover>
            <Buttons  onClick={this.handleClick} />
            <div>
            <Timeline >
                <Timeline.Item>{this.state.name}</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
            </div>
        </div>)
    } 
  }
  
  export default HelloButton 
  