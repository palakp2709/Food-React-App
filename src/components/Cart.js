import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="h-screen w-full">
      <div className="m-auto  h-fit max-w-[1000px] flex flex-col items-center">
        <div className="mx-auto py-8">
          <h1 className="text-3xl font-bold text-[#222831]">Cart 🍽</h1>
          <button onClick={handleClearCart} className="text-sm p-2 px-4 mt-4 bg-slate-300 text-gray-600">
            ClearCart
          </button>
        </div>

        <div className="">
          <ItemCard itemData={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
