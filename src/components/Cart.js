import { useSelector} from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () =>{
 
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div className="m-auto w-6/12 py-4">
            <h1 className="font-bold text-center">Cart </h1>
            <button  
                onClick={handleClearCart}
                className="ml-60 p-1 bg-black text-white text-sm rounded">
                ClearCart
            </button>
           
            <div className="">
                 <ItemCard  itemData={cartItems}/>
            </div>
           
        </div>
    )
}

export default Cart;