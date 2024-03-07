import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) =>{
    const {foodData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,

    } = foodData?.info

    return (
          <div data-testid="resCard"
             className="rounded-xl mt-4 ml-4 w-[300px] bg-slate-100 hover:bg-slate-200">
               <label 
                 className="bg-black text-white text-xs rounded-md">
                  
               </label>
                <img   src={ CDN_URL + cloudinaryImageId } className="h-40 p-2 w-60 "/> 
                <div className="p-4">
                   <h4 className=" font-bold">{name}</h4>   
                   <h5 className="text-xs pt-2 ">{cuisines.join(", ")}</h5>
                   <h5 className="text-xs pt-2 ">{avgRating} stars</h5>
                   <h5 className="text-xs pt-2">Rs {costForTwo}</h5>
                   <h5 className="text-xs pt-2">{sla?.slaString}</h5>

                </div>           
          </div>
    )
}

// export const withDiscountLabel = (RestaurantCard) =>{
//       return (props)=>{
       
//             return(
//                   <div>
//                         <label>discount</label> 
//                         <RestaurantCard {...props}/>
//                   </div>
                   
//             )
//       }
// }

export default RestaurantCard;
