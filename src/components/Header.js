import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnChange, setBtnChange] = useState("Login");
  const [nav, setNav] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const handleNavClick = () => {
    setNav(!nav);
  };

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="h-24 px-14  flex justify-between items-center mx-auto sticky top-0 bg-white ">
      <div className="w-16 ">
        <img src={LOGO_URL} />
      </div>

      <div>
        <ul className="hidden lg:flex text-sm text-[#56585c]">
          <li className="">OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="px-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3">
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3">
            <button
              onClick={() => {
                btnChange === "Login"
                  ? setBtnChange("Logout")
                  : setBtnChange("Login");
              }}
            >
              {btnChange}
            </button>
          </li>

          <li className="" data-testid="userName">
            {" "}
            Profile:{loggedInUser}
          </li>
        </ul>
      </div>

      <div className="lg:hidden" >
        <div onClick={handleNavClick}>
        {nav ? (
         <img
         src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
         alt="logo"
         className="w-8"
       />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="logo"
            className="w-8"
          />
        )}
        </div>

        <div className={nav ? "top-0 left-0 fixed bg-white h-full w-1/2 shadow-lg shadow-slate-500" : "fixed left-[-100%] ease-in-out duration-300"}>
          <div className="px-10 py-10">
            <img src={LOGO_URL} className="w-20 "/>
          </div>
          <ul className=" lg:hidden text-sm px-10 text-[#56585c]">
            <li className="py-2 border-b border-gray-300">OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="py-2 lg:px-2">
              <Link to={"/"}>Home</Link>
            </li>

            <li className="py-2  ">
              <Link to={"/contact"}>Contact </Link>
            </li>
            <li className="py-2  ">
              <Link to={"/cart"}>Cart({cartItems.length})</Link>
            </li>
            <li className="py-2  border-b border-gray-300">
              <Link to={"/about"}>About </Link>
            </li>
            <li className="py-2  ">
              <button
                onClick={() => {
                  btnChange === "Login"
                    ? setBtnChange("Logout")
                    : setBtnChange("Login");
                }}
              >
                {btnChange}
              </button>
            </li>

            <li className="py-2 " data-testid="userName">
              {" "}
              Profile:{loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
