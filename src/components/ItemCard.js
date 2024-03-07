import { addItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";


const ItemCard = ({itemData}) =>{

     const dispatch = useDispatch() ;
     const handleClick = (items) => {
           dispatch(addItem(items));
     }

    return(
       
         <div >
            {
                itemData.map( (items)=> (
                    <div 
                      data-testid="foodItems"
                     key={items.card.info.id} className="flex justify-between my-4 border-b-2 " >
                        <div className="w-9/12">
                           <h4 className="text-xs font-medium">{items.card.info.name} </h4>
                           <p className="text-xs my-1">Rs {items.card.info.price/100 || items.card.info.defaultPrice/100}</p>
                           <p className="text-xs my-1">{items.card.info.description}</p>
                        </div>
                        <div className="w-2/12 my-2">
                            <button  onClick={() => handleClick(items)}
                                className="py-1 w-14 border border-solid border-gray text-xs bg-gray-200 rounded-sm absolute text-green-600" >
                                    Add+
                            </button>

                            {
                                items.card.info.imageId ?
                                (
                                
                                <img src={CDN_URL + items.card.info.imageId } className="rounded-lg "/>
                            
                                ) : ""

                            }    
                        
                        </div>
                       
                        
                    </div>
                ))
            }
            
          

          
         </div>
    )
}

export default ItemCard;