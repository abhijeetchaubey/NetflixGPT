import Header from "./Header";
import { useState } from "react";
import i1 from '../Utils/Login_Background.jpg'

const Login =()=>{
    const[isSignInForm,setISSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setISSignInForm(!isSignInForm)
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
                <img
                src={i1}
                alt="background_img"/>
            </div>
            <form className="p-12 bg-black absolute mx-auto my-36 w-3/12 left-0 right-0 rounded-lg opacity-80">
            <h1 className="font-bold text-3xl text-white  py-4">{isSignInForm?'Sign In':'Sing Up'}</h1>
                <input
                type="text"
                placeholder="Full Name"
                className={`p-4 my-4 w-full bg-[#282828] rounded-lg outline-1 border-white ${isSignInForm ? `hidden`:``}`}
                />
                <input 
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full bg-[#282828] rounded-lg outline-1 border-white"/>
                <input 
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-[#282828]"
                />
                <button className="p-2 my-6 bg-red-700 w-full text-white opacity-100">{isSignInForm ?'Sing In':'Sign Up'}</button>
                <p className="text-white text-lg">{isSignInForm ?'New to NetFlix?':'Already have an Account? '}<span onClick={toggleSignInForm} className="font-bold cursor-pointer hover:border-b-2">{isSignInForm ?' Sign Up Now':' Sign In'}</span></p>
            </form>
        </div>
    )
}
export default Login;