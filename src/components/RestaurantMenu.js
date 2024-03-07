import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
     //CUSTOM HOOK
    const resData = useRestaurantMenu()
    const [showIndex, setShowIndex] = useState(null);

    if(resData === null) return <Shimmer/>;

    const {
        name, 
        cuisines, 
        areaName, 
        feeDetails ,
        avgRating, 
        totalRatingsString} = resData[0]?.card?.card?.info

    // const resItems = resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards || resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards || resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
    // //console.log(resItems)

    const categories = resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (category) =>(
               category?.card?.card?.["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )) 

    console.log(categories);

    return(
        <div className="w-6/12 m-auto">
                <div className="font-bold mb-2">
                <h4 >{name}</h4>
                </div>
                
                <div className="flex justify-between p-2">
                    <div className=" text-xs ">
                        <ul >
                            <li> {name}</li>
                            <li> {cuisines}</li>
                            <li> {areaName}</li>
                            <li> {feeDetails.message}</li>
                        </ul>     
                    
                    </div>

                    <div className="border border-solid border-grey-400 h-12 p-1 rounded-md">
                        <h2 className="text-sm text-green-600">{avgRating}</h2>
                        <p className="text-xs font-thin">{totalRatingsString}</p>
                    </div>   
                </div>
                  
                  {/* category accordian */}
                 {
                    categories.map( (category , index) => 
                    // controlled component
                    <RestaurantCategory    key={category?.card?.card.title}
                       data={category?.card?.card} 
                       showIndex={index === showIndex ? true : false}
                       setShowIndex ={() => setShowIndex(index)}
                    />)
                 }
        </div>
    )
}

export default RestaurantMenu;