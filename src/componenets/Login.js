import { useState } from "react"
import Header from "./Header"
import Signin from "./Signin"

export const Login = () => {
    const[signin,setsignin]=useState(true);
    function toggelsignin(){
        setsignin(!signin);

    }
    return (
        <div className="relative">
            <Header />

            <div className="brightness-0 sm:brightness-50 absolute w-[100%]">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" className="w-[100%] h-[100vh]"></img>
                
            </div>
            <div className="flex justify-center">
            <form className="absolute w-3/7 scale-[0.85] sm:absolute w-[450px] h-[500px] bg-black mt-28 rounded-xl flex flex-col items-center gap-6 pt-14 bg-opacity-75 scale-100">
               <div className="text-white text-4xl font-bold text-left opacity"><div className="">{signin?"Sign In":"Sign up"}</div></div> 
               {(!signin)&&<input className="p-3 pr-36 rounded-lg bg-gray-900 border-2 bg-opacity-70 text-white" type="text" placeholder="Full name"></input>}
               <input className="p-3 pr-36 rounded-lg bg-gray-900 border-2 bg-opacity-70 text-white" type="text" placeholder="email"></input>
               <input className="p-3 pr-36 rounded-lg bg-black border-2 bg-opacity-70 text-white" type="text" placeholder="password"></input>
               <button className="p-3 px-36 bg-red-600 rounded-lg text-white font-bold ">{signin?"Sign In":"Sign up"}</button>
               <p className="text-white cursor-pointer" onClick={()=>{
                toggelsignin();
               }}>{signin?"New to NetflixGPT, Click here":"Already a user ? Sign In"}</p>
               

            </form>
            </div>

            
        </div>
    )
}
