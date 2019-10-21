import React from 'react';
// import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import store from "../../Store";
import Action from "../../Store/Action.js";
// import * as Action from '../../Store/Action'



// const App = () => (
//   <Provider>
//     <Counter/>
//   </Provider>
// );
class ReduxPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:store.getState()
        }
    }
    decerment= ()=>{
        // store.dispatch({
        //     type:"decrement"
        // })
        store.dispatch(Action.decerment());
    }
    incerment= ()=>{
    //    store.dispatch({
    //        type:"increment"
    //    })
    store.dispatch(Action.incerment());

    }
    render(){
           store.subscribe(() =>
             this.setState({
              count: store.getState()   
             })
           );
        return <Provider store={store}><div>
                <h2>counter</h2>
                <button onClick={this.decerment}> -</button>
                <span>{store.getState()}</span>
                <button onClick={this.incerment}> +</button>
                </div></Provider>
    }
}


export default ReduxPage