import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart ,cartItems } = useContext(ShopContext)
    const cartItemsAmount = cartItems[id]
    return (
        <div className="max-w-sm  shadow-lg pb-8">
            <img className="w-full h-72" src={productImage} />
            {/* description */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{productName}</div>
                <p className="text-gray-700 text-base">${price}</p>
            </div>
            <button onClick={()=> addToCart(id)} className="px-4 py-1 border-2 font-bold border-black border-solid rounded-3xl hover:bg-black hover:text-white">
                Add To Cart {cartItemsAmount> 0 && <>({cartItemsAmount})</>}
            </button>
        </div>
    )
}