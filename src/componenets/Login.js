import { useState } from "react"
import Header from "./Header"
import Signin from "./Signin"
import { useRef } from "react"//hook to store the refrence of the input
import { checkvalidate } from "./utilities/validate"

export const Login = () => {
    const email=useRef(null); //email store the 
    const password=useRef(null);
    const[signin,setsignin]=useState(true);
    function toggelsignin(){
        setsignin(!signin);

    }
    function checkbro(){
       const taha=checkvalidate(email.current.value,password.current.value);
       seterror(taha);
    }
    const [error,seterror]=useState(null);
    return (
        <div className="relative">
            <Header />

            <div className="brightness-0 sm:brightness-50 absolute w-[100%]">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" className="w-[100%] h-[100vh]"></img>
                
            </div>
            <div className="flex justify-center">
            <form  onSubmit={(e)=>{
              
                e.preventDefault();
            }} className="absolute w-3/7 scale-[0.85] sm:absolute w-[450px] h-[500px] bg-black mt-28 rounded-xl flex flex-col items-center gap-6 pt-14 bg-opacity-75 scale-100">
               <div className="text-white text-4xl font-bold text-left opacity"><div className="">{signin?"Sign In":"Sign up"}</div></div> 
               {(!signin)&&<input className="p-3 pr-36 rounded-lg bg-gray-900 border-2 bg-opacity-70 text-white" type="text" placeholder="Full name">
                
                </input>}


               <input ref={email} className="p-3 pr-36 rounded-lg bg-gray-900 border-2 bg-opacity-70 text-white" type="text" placeholder="email">

               </input>


               <input ref={password} className="p-3 pr-36 rounded-lg bg-black border-2 bg-opacity-70 text-white" type="password" placeholder="password">

               </input>
               <p className="text-red-700">{error}</p>
               <button type="submit" className="p-3 px-36 bg-red-700 rounded-lg text-white font-bold "onClick={()=>{
               checkbro();

                
               }}>{signin?"Sign In":"Sign up"}</button>
               <p className="text-white cursor-pointer" onClick={()=>{
                toggelsignin();
               }}>{signin?"New to NetflixGPT, Click here":"Already a user ? Sign In"}</p>
               

            </form>
            </div>

            
        </div>
    )
}
