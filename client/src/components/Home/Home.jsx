import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { useEffect, useContext } from "react";
import {fetchDataFromApi} from "../../utils/api"
import { Context } from "../../utils/context";


const Home = () => {
    //const pc  = useContext(Context)
    const {categories, setCategories, products, setProducts } = useContext(Context);
    useEffect (() => {
        getCategories();
        getProducts();

    }, []);
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.warn(res);
           setCategories(res);
        }  );
    };
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.warn(res);
            setProducts(res);
        }  );
    };
    return <>
    <Banner/>
    <div className="main-content">
        <div className="layout">
            
        <Category 
        categories={categories}
        />
         <Products products={products} headingText="Popular Products"/> 
        
        </div>
    </div>
    
   
    </>;
};

export default Home;
