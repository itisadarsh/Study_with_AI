import studylogo from "../Images/studylogo.jpeg";
import gridnet from "../Images/Grid-Line.png";
import React from "react";
import Image from "./Images";
import Section from "./Section";
import { FcGoogle } from "react-icons/fc";

import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import { useState} from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {

    const[visible,setVisible]=useState(false);

    const navigate=useNavigate()

    const[formData,setFormData]=useState({email:"",password:""});

    function changeHandler(event){
        setFormData((prev)=>{
            return{
            ...prev,[event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event){
        
        event.preventDefault();
        props.setLoggedIn(true);
        toast.success("Logged in successfully");
        navigate("/Dashboard");

        // console.log(props.isLoggedIn);

    }


    return (<div className="mt-4  flex w-full ">

        <div className=" mx-[20vw] login flex justify-between relative flex-wrap gap-10">
         
         
            <div className="sign-section flex flex-col w-[40%] text-left gap-3">
                <Section heading={"Welcome Back"} subhead1={"Build Skills for today, tommorrow and beyond"} subhead2={"Education to future proof your carrer"} />
        
        <form action="" className="flex flex-col gap-2" onSubmit={submitHandler}>
        <div className="email-wrap flex flex-col gap-1">
        <label htmlFor="email">Email<sup>*</sup></label>
        <input type="email" required 
        className="bg-transparent rounded-md text-sm p-1" 
        placeholder="Enter Email address" 
        name="email"
        onChange={changeHandler}
        value={formData.email}
        />

        </div>

        <div className="pass-wrap  flex flex-col">
        <label htmlFor="password" className="relative  w-full">

         <p className="text-[0.875rem] w-full mb-1">Password<sup>*</sup></p>
       
        <input type={visible?"type":"password"} 
        required name="password"
        onChange={changeHandler}
        value={formData.password}
        className="text-white text-sm p-1 bg-transparent rounded-md  w-full"
        placeholder="Enter password" />

        <span  className="absolute right-3 top-6" onClick={()=>{ setVisible((prev)=>!prev)}}>
        {visible?<AiOutlineEye fontSize={24} fill="#AFB2BF"/>: <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>}
        </span>


       </label>
        <p className=" self-end text-xs text-cyan-400">Forgot Password</p>
        </div>

        <button className="mt-4 bg-yellow-400 text-black rounded-md py-1 ">Sign in</button>
        </form>

        <div className="flex items-center">
                    <div className="ouline w-[47%] h-[1px] opacity-40 bg-white"></div>
                    <div>OR</div>
                    <div className="ouline w-[47%] opacity-40 border"></div>
                </div>

                <button className="flex justify-evenly items-center bg-green-500 rounded-md py-1"><FcGoogle/>Sign Up With Google</button>
        
            </div>

       
        <div className="img-section w-[40%] min-h-* relative">
        <Image Image1={gridnet} Image2={studylogo} />
        </div>
        </div>
    </div>

    );

}

export default LogIn;