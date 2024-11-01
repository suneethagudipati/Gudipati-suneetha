import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg(){
   const  vegProducts=useSelector(state=>
    state.products.veg
   )
   const dispatch=useDispatch()
   const items=vegProducts.map((product,index)=>(
    <li key={index}>{product.name}-{product.price}
    <button onClick={()=>dispatch(addToCart(product))}>add to cart</button></li>
   ));
    return(
        <>
        <h1>veg products</h1>
        <ul>{items}</ul>
        </>
    );
};
export default Veg;