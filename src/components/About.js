import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent ComponentDIDMount")
    }

    render(){
        console.log("parent rendering")
        return(
                <div>
                    <h1>About Me!!!</h1>
                    <UserContext.Consumer>
                            {({loggedInUser}) => <h1 className="text-md font-bold">UserContext-Data : {loggedInUser}</h1>}     
                    </UserContext.Consumer>
                    <h2>This is Namaste React Series -- To Gain knowledge of complete React</h2>
                    <hr/>
                    <User name={"Palak Patel"} profession={"Web Developer"} />
                    <hr/>
                    <UserClass name={"Sky Patel"} profession={"Fronted Web Developer"}/>
                </div>
                )
           }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About Me!!!</h1>
//             <h2>This is Namaste React Series -- To Gain knowledge of complete React</h2>
//             <hr/>
//             <User name={"Palak Patel"} profession={"Web Developer"} />
//             <hr/>
//             <UserClass name={"Sky Patel"} profession={"Fronted Web Developer"}/>
//         </div>
//     )
// }

export default About;