import { PRODUCTS } from "../../products.js"
import { Product } from "./product.jsx"


export const Shop = () => {
   return (
      <div className="flex-row justify-center items-center py-20">
         {/* shop title */}
         <div className="mb-20 text-6xl font-extrabold">
            <h1> PedroTech Shop</h1>
         </div>
         <div className="flex flex-1 justify-center w-full">
            {/* product  */}
            <div className="grid w-fit gap-7 grid-cols-3">
               {PRODUCTS.map((product) => (
                  <Product data={product} />
               ))}
            </div>
         </div>


      </div>

   )
}