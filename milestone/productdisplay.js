import React from "react";
import Jsonproduct from "./jsonproducts";
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
 export function Productdisplay(){
return(
    <div className="container-fluid row justify-content-around" style={{height:"100vh",width:"100vw"}}>
        <Jsonproduct/>
    </div>
);
}
