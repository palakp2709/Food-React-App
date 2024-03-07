import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            count : 0,
            count2 : 2,
        }
        console.log("Child Constructor")
    }

    componentDidMount(){
        console.log("Child ComponentDIDMount")
    }

    render() {
        console.log("Child rendering")
        const {name, profession} = this.props;
        const {count, count2} = this.state
        return(
            <div>
                Class Based Component
                <h4> count : {count} - count2 : {count2}</h4>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Click ME</button>
                <h4>{name} - {profession}</h4>
                
            </div>
        )
    }
}

export default UserClass;