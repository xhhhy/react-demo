import React from 'react';

import Header from '../../component/header/header';
import {Link} from 'react-router-dom';

// es 5 
const user = {name :"123",age:"123"}
function Home() {
    if(user){
        return (
            <div>      
                <header className="title">
                    <Header user={user} ></Header>
                    <Link to="/about" >跳转</Link>
                </header>
            </div>
          )
    }
    return (
        <div>      
            <header className="title">
                <Link to="/about" >跳转</Link>
            </header>
        </div>
      )
   
}
//es6


export default Home
