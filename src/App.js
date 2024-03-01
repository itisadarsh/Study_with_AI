import {Routes,Route, NavLink } from 'react-router-dom';
import './App.css';
import Main from "./Layout/Main";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import Signup from "./Layout/Signup";
import LogIn from "./Layout/LogIn";
import Dashboard from "./Layout/Dashboard";
import logo from "./Images/logoo.png";
import { useState } from 'react';
import toast from 'react-hot-toast';




function App() {

 

    const[isLoggedIn,setLoggedIn]=useState(false);
    
  return (

    

    <div className="App relative bg-black text-white min-h-screen max-h-* flex flex-col">

{
      console.log(isLoggedIn)
    }
  <nav className=' flex justify-evenly items-center'>

    <div className=''> 
    <NavLink to={"/"}>
    <img src={logo} alt="" width="120px" className=' brightness-[400]'/>
    </NavLink>
    
    </div>
    <ul className=' flex justify-evenly gap-4'>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/About"}>About</NavLink></li>
    <li><NavLink to={"/Contact"}>Contact</NavLink></li>
   
    </ul>

    <div className=' flex justify-evenly gap-4'>
   {!isLoggedIn &&  <NavLink to={"/Login"}><button >LogIn</button></NavLink> }
   {!isLoggedIn && <NavLink to={"/Signup"}>SignUp</NavLink>}
   {isLoggedIn  &&  <NavLink to={"/"}> <button onClick={()=>{setLoggedIn(false); toast.success("Logged out successfully"); }}>LogOut</button></NavLink>}
   {isLoggedIn && <NavLink to={"/Dashboard"}><button>Dashboard</button></NavLink>}
    </div>

    </nav>


    <Routes>
      <Route path="/" element={<Main/>}>

      <Route index element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<LogIn isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}/>
      <Route path="/Signup" element={<Signup setLoggedIn={setLoggedIn}/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<div>No Page Found</div>}/>


      </Route>
    </Routes>










      
    </div>
  );
}

export default App;
