import Image from "./Images"
import Section from "./Section"
import studylogo from "../Images/studylogo.jpeg";
import React, { useState } from "react";
import Student from "./Student";
import Instructor from "./Instructor";
import gridnet from "../Images/Grid-Line.png";

const Signup=(props)=>{

    const[isStudent,setStudent]=useState(true);

    return(
        <div className="mt-4 flex relative w-full justify-between ">

        <div className=" mx-[20vw] signup flex justify-between relative">
            <div className="sign-section relative flex flex-col w-[40%] text-left gap-3">
               
                <Section heading={"Join the millions learning to code for study-app for free"} subhead1={"Build Skills for today, tommorrow and beyond"} subhead2={"Education to future proof your carrer"} />

                <div className="flex justify-evenly bg-slate-800 rounded-lg">

                <button className=" hover:bg-black w-full my-1 rounded-lg" onClick={()=>{setStudent(true)}}>Student</button>
                <button className=" transition hover:bg-black w-full my-1 rounded-lg" onClick={()=>{setStudent(false)}}>Instructor</button>
            
                </div>

                {
                    isStudent?<Student setLoggedIn={props.setLoggedIn}/>:<Instructor setLoggedIn={props.setLoggedIn}/>
                }
                
                

               </div>

      
        <div className="img-section w-[40%] min-h-* relative">
        <Image Image1={gridnet} Image2={studylogo} />
        </div>
        </div>
    </div>
    );

}
export default Signup;