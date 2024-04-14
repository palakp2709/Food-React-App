import FoodList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
//import { withDiscountLabel } from "./RestaurantCard";
import UserContext from "../../utils/UserContext";

//CARD
const Body = () => {
  const [listOfFood, setListOfFood] = useState([]);
  const [filterResData, setFilterResData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  //const RestaurantCardPromoted = withDiscountLabel(RestaurantCard)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7197524&lng=75.8620193&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //OPTIONAL CHAINING;
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfFood(res);
    setFilterResData(res);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Opps!! you're offline, please check your internet connection..</h1>
    );
  }

  //CONDITIONAL RENDERING: rendering according to condition
  return  (
    <div className="h-screen w-full">
      <div className="p-4 h-28 md:h-24 bg-gradient-to-l from-teal-400 to-cyan-600 ">
        <div >
        <div className="flex justify-between">
            <button
              className="text-[0.7rem] p-1 md:text-xs md:p-2 bg-transparent rounded-sm  "
              onClick={() => {
                let filteredData = listOfFood.filter(
                  (res) => res.info.avgRating > 4.3
                );
                setFilterResData(filteredData);
              }}
            >
              Top Rated Restaurants
            </button>

            {/* <label>UserName : </label> */}
            <input
              data-testid="nameInput"
              className=" text-[0.7rem] px-2  border bg-transparent rounded-sm  "
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-4 md:mt-1" >
            <input
              data-testid="searchInput"
              placeholder="Write restaurant name"
              className="text-xs p-2 px-16 rounded-l-sm"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className=" text-xs p-2 px-4  bg-white rounded-r-sm text-gray-500 "
              onClick={() => {
                //Filter the Restaurants card and update the ui //searchtext
                const filteredData = listOfFood.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilterResData(filteredData);
              }}
            >
              Search
            </button>
          </div>

         
        </div>

        <div className="mt-6 md:mt-4 p-2 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filterResData.map((food) => (
            <Link
              key={food.info.id}
              to={"/restaurant/" + food.info.id}
              //   style={{ textDecoration: "none", color: "black" }}
            >
              <RestaurantCard foodData={food} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
