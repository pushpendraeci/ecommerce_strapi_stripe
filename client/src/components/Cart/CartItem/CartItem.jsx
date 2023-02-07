import "./CartItem.scss";
import { MdClose } from "react-icons/md";
//import prod from "../../../assets/products/earbuds-prod-2.webp";
import{useContext} from "react";
import { Context } from "../../../utils/context";


const CartItem = () => {
        
        const {cartItems, handleRemoveFromCart, handleCartProductQuantity }  = useContext(Context);
    return (
    <div className="cart-products">
        {cartItems.map((item)=>(

        
        <div  className="cart-product">
            <div className="image-container">
                {/* <img src={prod} alt=""/> */}
                <img src= {process.env.REACT_APP_DEV_URL +item?.attributes?.img?.data[0]?.attributes?.url} alt=""/>
            </div>
            <div className="prod-detail">
                <span className="name">{item?.attributes?.title}</span>
                <MdClose className="clost-btn" onClick={()=>handleRemoveFromCart(item)} />
                <div className="quantity-buttons">
                            <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item?.attributes?.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                        </div>
               <div className="text">
                            <span>{item?.attributes?.quantity}</span>
                            <span>x</span>
                            <span>&#8377;{item?.attributes?.price}</span>
                            <span>=</span>
                            <span className="highlight">&#8377;{item?.attributes?.price * item?.attributes?.quantity}</span>
                        </div>
            </div>
        </div>
         ))}
    </div>
    );
};

export default CartItem;
