import { useContext } from "react"
import s22 from "./../../assets/s22.jpg"
import { ShopContext } from "../../context/shop-context"
export const CartItem = (props) => {
    const{id,productName,price,productImage} = props.data
    const {cartItems,addToCart,removeFromCart,updateCart} = useContext(ShopContext)
    return (
       <div className=" flex max-w-screen-md items-center overflow-hidden rounded-3xl shadow-xl">
          <img src={productImage} alt="product" className="w-1/3 p-2 " />
          <div className= "pl-3 flex-row justify-start space-y-4">
            
              <p className="flex justify-start text-2xl font-bold">{productName}</p> 
              <p className="text-xl flex justify-start font-bold">${price}</p> 
               <div className="flex justify-start">
               <button onClick={()=> removeFromCart(id)} className="border-2 border-gray-300 w-4 bg-gray-200"> - </button>
               <input  value={cartItems[id]} onChange={(e)=> updateCart(Number(e.target.value),id)} className="w-8  text-center focus:outline-none  border-solid border-2 border-gray-300" />
               <button onClick={()=>addToCart(id)} className="border-2 border-gray-300 w-4 bg-gray-200" > + </button>
                </div> 
           
           
          </div>
       </div>     
    )
}