import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../page/about/about";
import Home from "../page/home/home";
import Readring from "../page/rendering/rendering";


// function formatName(user){
//   return user.first +"" +user.last
// }
//路由
function APP() {
    return (
    <Router>
          <Route exact path="/about" component={About} />
          <Route exact path="/readring" component={Readring} />
          <Route exact path="/" component={Home} />
   </Router>
  )
}


export default APP
