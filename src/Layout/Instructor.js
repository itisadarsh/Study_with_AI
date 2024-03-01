import React from "react";
import Tempelate from "./Tempelate";

const Instructor=(props)=>{

   
    return (
        
        <div>
        <Tempelate setLoggedIn={props.setLoggedIn}/>
   </div>
    );
}

export default Instructor;