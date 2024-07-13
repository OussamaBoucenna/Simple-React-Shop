
import { useContext } from "react"
import { PRODUCTS } from "../../products"
import { CartItem } from "./cart-tem"
import { ShopContext } from "../../context/shop-context"
import { useNavigate } from "react-router-dom"
export const Cart = () => {
     const navigate = useNavigate(); 
     const { cartItems,getTotalCartAmount} = useContext(ShopContext)
     return (
          <div className="pt-5 py-12">
               {/* title */}
               <div className="text-2xl font-bold my-3">
                    Your Cart Items
               </div>
               <div className=" flex w-full justify-center">
                    <div className="flex-row space-y-6">
                         {/* mappin here */}
                         {PRODUCTS.map((product) => {
                              if (cartItems[product.id] !== 0) {
                                   return <CartItem key={product.id} data={product} />;
                              }
                              return null; // Return null if the condition is not met
                         })}
                    </div>
               </div>
               {getTotalCartAmount() > 0 ? <div className="flex-row m-10">
                    <div className="mb-4">Subtotal : ${getTotalCartAmount()}</div>
                   <div className="flex gap-4 justify-center">
                   <button onClick={()=>navigate("/")} className="bg-black text-white  hover:text-black   hover:bg-white border-black border rounded-xl font-semibold py-2 px-4">Continue Shopping</button>
                   <button  className="bg-black text-white hover:text-black hover:bg-white border-black border rounded-xl font-semibold py-2 px-4">Checkout</button>
                   </div>
               </div>
          : <h1>Your Cart is Empty</h1>
               
          
          }
          </div>)
}