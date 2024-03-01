import React from "react";
import Tempelate from "./Tempelate";

const Student=(props)=>{

  
    return (
         <div className="Student">
          <Tempelate setLoggedIn={props.setLoggedIn}/>
        </div>
    );
}

export default Student;