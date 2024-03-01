import Image from "./Images"
import Section from "./Section"
import studylogo from "../Images/studylogo.jpeg";
import React, { useState } from "react";
import Student from "./Student";
import Instructor from "./Instructor";


const Signup=(props)=>{

    const[isStudent,setStudent]=useState(true);

    return(
        <div className="mt-4 login flex w-full ">

        <div className=" mx-[20vw] flex justify-around relative">
            <div className="sign-section flex flex-col w-[40%] text-left gap-3">
               
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
        <Image Image1={studylogo} Image2={studylogo} />
        </div>
        </div>
    </div>
    );

}
export default Signup;