import "./Products.scss";
import Product from "./Product/Product";
const Products = ( {products, innerPage, headingText} ) => {
    
    return <div className="products-container">
      {!innerPage &&  <div className="sec-heading">{headingText}</div>}
      
        <div className="products">
            {products?.data?.map(item => (
                <Product key={item.id} id={item.id} data={item.attributes.title} price={item.attributes.price} imgurl={item.attributes.img.data[0].attributes.url} />
                
                

            ))}
            {/*<Product />
             <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
        </div>

    </div>;
};

export default Products;
