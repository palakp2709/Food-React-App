import React, { useContext, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useEffect, useContext } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
       
    //  const {loggedInUser} = useContext(UserContext)
      //authentication
      const [userName , setUserName] = useState();

      useEffect( () =>{
            const data = {
                  name : "Palak Patel",
            };

            setUserName(data.name)
           
      },[])
    

      return(
            <Provider store={appStore}>
            <UserContext.Provider  value={{ loggedInUser : userName , setUserName}}>
            <div className="app">
            
                <Header />
           
                <Outlet/>
            </div>
            </UserContext.Provider>
            </Provider>
      )
}

const appRouter = createBrowserRouter([
      {
            path:"/",
            element: <AppLayout/>,
            children:[
                  {
                        path:"/",
                        element:<Body/>
                  },
                  {
                        path:"/about",
                        element:<About/>
                  },
                  {
                        path:"/contact",
                        element:<Contact/>
                  },
                  {
                        path:"/restaurant/:resID",
                        element:<RestaurantMenu/>
                  },
                  {
                        path:"/cart",
                        element:<Cart/>
                  }
            ],
            errorElement : <Error/>
      },
     
      
])

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>)  