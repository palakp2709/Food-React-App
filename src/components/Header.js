import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnChange , setBtnChange] = useState("Login")
    const {loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between shadow-lg">

         <div className="w-36 ">
         <img  src={LOGO_URL} />
         </div>

         <div className="m-4 p-4">
               <ul className="flex ">
                     <li className="mx-4">
                        OnlineStatus: {onlineStatus? "🟢" : "🔴"}
                     </li>
                     <li className="mx-4">
                        <Link to={"/"}>Home</Link> 
                     </li>
                     <li className="mx-4"> 
                        <Link to={"/about"}>About Us</Link> 
                     </li>
                     <li className="mx-4"> 
                        <Link to={"/contact"}>Contact Us</Link> 
                     </li>
                     <li className="mx-4">
                        <Link to={"/cart"}>Cart({cartItems.length})</Link>
                     </li>
                     <li className="mx-4" > 
                      <button onClick={() =>{
                          btnChange === "Login" 
                          ? setBtnChange("Logout") 
                          : setBtnChange("Login")
                      }}>
                        {btnChange}
                        </button>
                     </li>

                     <li className="mx-4" data-testid="userName"> Profile:{loggedInUser}</li>

               </ul>
         </div>

      </div>
    ) 
}

export default Header;