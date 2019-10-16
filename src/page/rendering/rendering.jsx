import react from "react"
import ReactDOM from "react-dom"
 

const isLoggedIn = true

class Readring extends React.Component{
    render(){
        return(<div>条件渲染
                <div>
                    {isLoggedIn ? (
                        <div>login</div>
                    ) : (
                        <div>loginout</div>
                    )}
                    </div>
                );
        </div>
        ) 
    }
}
ReactDOM.render(
    <Readring />,
    document.getElementById('root')
  );
export default Readring