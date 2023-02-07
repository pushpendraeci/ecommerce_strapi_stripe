import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import "./PaymentSuccess.scss";
//import "./Home.scss";
import "./PaymentSuccess.scss";
import "./Success.css"

const PaymentSuccess = () => {
    return (
        

        <div className="pcard">
            <div className="innerCrd">
                <i className="checkmark"><BsPatchCheckFill /></i>  
            </div>
            <h1>Success</h1>
            <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
        </div>
        


    );
}

export default PaymentSuccess;
