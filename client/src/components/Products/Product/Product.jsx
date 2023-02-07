import {useNavigate} from "react-router-dom"
import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-2.webp";
const Product = ({ id, data, price, imgurl}) => {
   
    const navigate = useNavigate();
    
    return (
         
     <div className="product-card" onClick={()=> navigate(`/product/${id}`)}>
        <div className="thumbnail">
            {/* <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" /> */}
           
            {/* <img src={prod} alt="" /> */}
            <img src={process.env.REACT_APP_DEV_URL + imgurl} alt="" /> 
        </div>
        <div className="prod-detail">
            
            <span className="name">{data}</span>
            <span className="price">&#8377;{price}</span>
        </div>
    </div>
    );
};

export default Product;
