import FoodList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
//import { withDiscountLabel } from "./RestaurantCard";
import UserContext from "../../utils/UserContext";


//CARD
const Body = () => {

    const [listOfFood , setListOfFood] = useState([]);
    const [filterResData , setFilterResData] = useState([]);
    const [searchText , setSearchText] = useState("");
 
    const {loggedInUser, setUserName } = useContext(UserContext);
    //const RestaurantCardPromoted = withDiscountLabel(RestaurantCard)
   
    useEffect( () =>{
        fetchData()
    },[])

    const fetchData = async () =>{
            
        const data = await fetch(
        ' https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7197524&lng=75.8620193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )
        const json = await data.json();

        //OPTIONAL CHAINING;
        const res = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfFood(res)  
        setFilterResData(res)
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return(
            <h1>
                Opps!! you're offline, please check your internet connection..
            </h1>
        )
    }

    //CONDITIONAL RENDERING: rendering according to condition
    return listOfFood.length === 0 ?  ( <Shimmer/> ) : (
   
         <div className="mt-8">
                <div className="flex">   
                    <div >
                            <input 
                               data-testid="searchInput"
                              className=" mx-6 bg-slate-50 border border-solid border-black"
                               type="text" 
                               value={searchText} 
                               onChange={ (e) =>{
                                setSearchText(e.target.value)        
                               }} 
                            />
                            <button 
                              className="bg-green-100 px-4 py-1 rounded-md"
                               onClick={() => {
                              //Filter the Restaurants card and update the ui //searchtext
                               const filteredData = listOfFood.filter( (res) =>(
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                                ))
                            
                              setFilterResData(filteredData)
                                 }}
                            >Search</button>
                    </div>
    
                    <button 
                        className="mx-12 px-4  bg-gray-100 rounded-md"  
                        onClick={ () => {
                        let  filteredData = listOfFood.filter( 
                            (res) =>  res.info.avgRating > 4.3
                            );
                          setFilterResData( filteredData)
                        }}>Top Rated Restaurants
                    </button>

                    <div>
                        {/* <label>UserName : </label> */}
                        <input 
                         data-testid="nameInput"
                         className="  bg-slate-50 border border-solid border-black"
                         value={loggedInUser}
                         onChange={(e) => setUserName(e.target.value) }
                        />
                    </div>
                </div>
             
    
                <div className="flex flex-wrap">
                    {filterResData.map( (food) =>(
                       <Link key={food.info.id}  to={"/restaurant/"+ food.info.id} style={{ textDecoration: 'none', color:"black" }}>
                          <RestaurantCard  foodData={food}/> 
                        </Link> 
                    )
                            
                    )}   
                </div>
 
         </div>
        
     
    )
 }

 export default Body;