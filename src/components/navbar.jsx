import { Link } from "react-router-dom";
import { ShoppingCart  } from "phosphor-react"

 
 
 export const Navbar = () => {
    return(
        <div>
          <div className="bg-black flex items-center justify-end space-x-8 px-10 py-4">
            <Link to="/" className="text-white text-xl font-bold" >Shop</Link>
            <Link to="/cart"> <ShoppingCart size={32} color="white" /> </Link>
          </div>
        </div>
    )
 };