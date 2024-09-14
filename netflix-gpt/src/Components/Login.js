import Header from "./Header";
import { useRef, useState } from "react";
import i1 from '../Utils/Login_Background.jpg'
import { checkValidData } from "../Utils/Validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Login =()=>{
    const[isSignInForm,setISSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]= useState(null)
    const email =useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick =()=>{
        // Validate the form Data
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message =checkValidData(email.current.value,password.current.value,name.current.value);
        
        // console.log(message);
        setErrorMessage(message)

        if(message) return;

        if(!isSignInForm){
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
            const user = userCredential.user;
            console.log(user);
            
    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" +errorMessage)
        });
        }
        else{
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
                
            });
        }
        
    }

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
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="p-12 bg-black absolute mx-auto my-36 w-3/12 left-0 right-0 rounded-lg opacity-80">
            <h1 className="font-bold text-3xl text-white  py-4">{isSignInForm?'Sign In':'Sign Up'}</h1>
                <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className={`p-4 my-4 w-full bg-[#282828] text-white rounded-lg outline-1 border-white ${isSignInForm ? `hidden`:``}`}
                />
                <input 
                ref={email}
                type="text" 
                placeholder="Email Address" 
                className="p-4 my-4 w-full bg-[#282828] text-white rounded-lg outline-1 border-white"/>
                <input 
                ref={password}
                type="password" 
                placeholder="Password" 
                className="p-4 my-4 w-full bg-[#282828] text-white rounded-lg outline-1"
                />
                <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>

                <button className="p-4 my-6 bg-red-700 w-full z-50 opacity-100 text-white rounded-lg outline-1" onClick={handleButtonClick}>
                    {isSignInForm ?'Sign In':'Sign Up'}</button>
                <p className="text-white text-lg">{isSignInForm ?'New to NetFlix?':'Already have an Account? '}<span onClick={toggleSignInForm} className="font-bold cursor-pointer hover:border-b-2">{isSignInForm ?' Sign Up Now':' Sign In'}</span></p>
            </form>
        </div>
    )
}
export default Login;