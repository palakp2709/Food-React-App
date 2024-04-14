import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDIDMount");
  }

  render() {
    console.log("parent rendering");
    return (
      <div className="h-screen w-full ">
        <div className="max-w-[1000px]  h-full mx-auto flex flex-col justify-center">
          <h1 className="text-center tedxt-md sm:text-lg font-bold  text-[#222831]">
            Difference between Class based and Functional based component 
          </h1>
          <div className="text-center py-1">
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className=" text-sm text-[#31363F]">
                  UserContext-Data : {loggedInUser}
                </h1>
              )}
            </UserContext.Consumer>
            <h2 className="text-sm text-[#31363F] py-1">
              This is Namaste React Series -- To Gain knowledge of complete
              React
            </h2>
           
            <User name={"Palak Patel"} profession={"Web Developer"} />
           
            <UserClass
              name={"Sky Patel"}
              profession={"Fronted Web Developer"}
            />
          </div>
        </div>
      </div>
    );
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
