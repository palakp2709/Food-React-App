
import ItemCard from "./ItemCard";

const RestaurantCategory = ({data , showIndex , setShowIndex}) =>{

     const handleClick = () =>{
       setShowIndex(); 
     }
     
     
  
    return(
      <div >
        {/* Accordian Header */}
        <div className="bg-gray-50  my-2 shadow-lg text-xs p-2" >
          <div className="flex justify-between cursor-pointer " onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span> 
            <span className="">∨</span>
          </div>
          
          
        {/* Accordian Body */}
          { showIndex && <ItemCard  itemData={data.itemCards}/>}
        </div>   
      </div>
    )
}

export default RestaurantCategory;