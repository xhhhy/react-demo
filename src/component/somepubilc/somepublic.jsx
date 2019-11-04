import React from "react"
// class SomePlugin extends React.Component{
//     componentDidMount(){
//         this.$el=$(this.el)
//         this.$el = SomePlugin()
//     }
//     componentWillUnmount(){
//         this.$el.SomePlugin("distory")
//     }
//     render(){
//         return <div ref={el=>this.el=el}></div>
//     }
// }
class Chosen extends React.Component{
    componentDidMount(){
        this.$el=$(this.el)
        this.$el.chosen()
        this.handleChange = this.handleChange.bind(this)
        this.$el.on("change",this.handleChange)

    }

    componentDidUpdate(prevProps){
        if(prevProps.children!==this.props.children){
            this.$el.trigger("chosen:updated")
        }
        
    }
    componentWillUnmount(){
        this.$el.off("change",this.handleChange)
        this.$el.chosen("distroy")

    }
    handleChange(e){
            this.props.onChange(e.target.value)
    }
    render(){
        return(
            <div> 
                <select className="Chosen-select" name="" id="" ref={el=>this.el=el}>
                    {this.props.children}
                </select>
            </div>
        )
    }
}
export default Chosen




