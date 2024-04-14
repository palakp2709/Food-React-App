import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { foodData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    foodData?.info;

  return (
    <div className="hover:scale-105 duration-300">
      
        <div
          data-testid="resCard "
          className="shadow-lg shadow-gray-400 rounded-md"
        >
          {/* <label className="bg-black text-white text-xs rounded-md"></label> */}
          <img src={CDN_URL + cloudinaryImageId} className="h-36  w-full " />
          <div className="p-1 ">
            <h4 className=" font-bold text-sm truncate text-[#3d4450] py-2">{name}</h4>
            <h5 className="text-xs  truncate text-[#6a6e74] ">{cuisines.join(", ")}</h5>
            <h5 className="text-xs text-[#6a6e74] ">{avgRating} stars</h5>
            <h5 className="text-xs text-[#6a6e74] ">Rs {costForTwo}</h5>
            <h5 className="text-xs text-[#6a6e74] ">{sla?.slaString}</h5>
          </div>
        </div>
     
    </div>
  );
};

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
