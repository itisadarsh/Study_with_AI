import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Template = (props) => {

    const[passvisible,setpassVisible]=useState(false);
    const[confvisible,setconfVisible]=useState(false);
    const navigate=useNavigate();

    const[formData,setFormData]=useState({email:"",password:"",fname:"",lname:"",confpass:""});

    function changeHandler(event){
        setFormData((prev)=>{
            return{
            ...prev,[event.target.name]:event.target.value
            }
        })
    }

    function submitHandler(event){

        event.preventDefault();
        if(formData.password!==formData.confpass)toast.error("PassWord doesn't match");
        else{
            toast.success("Account created Successfully!!");
            
           props.setLoggedIn(true)
            navigate("/dashboard");

        }
    }


    return (<div>



        <form action="" className="flex flex-col gap-2" onSubmit={submitHandler}>

            <div className="flex gap-1 flex-wrap">
                <div className="flex flex-col gap-1">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="bg-transparent rounded-md" placeholder="Enter First Name" name="fname" onChange={changeHandler} value={formData.fname}/>
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="bg-transparent rounded-md" placeholder="Enter Last Name" name="lname" onChange={changeHandler} value={formData.lname}/>
                </div>

            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="fname">Email</label>
                <input type="email" className="bg-transparent rounded-md" placeholder="Enter Email" name="email" onChange={changeHandler} value={formData.email}/>
            </div>


            <div className="flex gap-1 flex-wrap">
                <div className="flex flex-col gap-1">
                    <label htmlFor="pass">Create Password
                    <input type={passvisible?"text":"password"} className="bg-transparent rounded-md" placeholder="Create Password" name="password" onChange={changeHandler} value={formData.password} />

                    <span onClick={()=>{ setpassVisible((prev)=>!prev)}}>
                        {passvisible?<AiOutlineEye/>: <AiOutlineEyeInvisible/>}
                    </span>

                    </label>
                </div>

                <div className=" flex flex-col gap-1">
                    <label htmlFor="confPass">Confirm Password
                    <input type={confvisible?"text":"password"} className="bg-transparent rounded-md" placeholder="Confirm Password" name="confpass" onChange={changeHandler} value={formData.confpass}/>
                    <span onClick={()=>{ setconfVisible((prev)=>!prev)}}>
                        {confvisible?<AiOutlineEye/>: <AiOutlineEyeInvisible/>}
                    </span>
                    </label>
                </div>

            </div>




            <button className="mt-4 bg-yellow-400 text-black rounded-md py-1 " >Create Account</button>
        </form>
    </div>);
}
export default Template;