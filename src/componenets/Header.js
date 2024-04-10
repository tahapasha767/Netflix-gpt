import React from 'react'
import {signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

import { auth } from './utilities/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

import { store_details_ofuser,delete_details_ofuser } from './utilities/sliceofstore/Userslice'
function Header() {
  
  
  const dispatch=useDispatch();
  const navigator=useNavigate();
  const flag=useSelector(store=>store.user.details_of_user);
  function signout(){
   


signOut(auth).then(() => {
  // Sign-out successful.
  navigator('/');
  dispatch(delete_details_ofuser());
}).catch((error) => {
  // An error happened.
});

  }
  useEffect(()=>{
    console.log("hellow tahahaha");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
       
        const {uid,displayName,email} = user;
        dispatch(store_details_ofuser({uid,displayName,email}));
        navigator("/browse");

       
        // ...
      } else {
        dispatch(delete_details_ofuser());
        navigator("/");
        // User is signed out
        // ...
      }
    });
  },[])
  return (
    <div className=' absolute z-50 w-[100%] mt-6 ml-4 flex justify-between '>
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='w-20 sm:w-32'></img>
          {flag&&<div className='w-30 flex justify-center items-center mr-16 gap-3' >
            
         
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='sm:w-10 sm:h-10 rounded-md w-7 h-7'></img>
            <button onClick={()=>{
              signout();

            }} className='text-white hover:text-red-600 text-sm'>Sign out</button>
            </div>}
          
    </div>
  )
}

export default Header