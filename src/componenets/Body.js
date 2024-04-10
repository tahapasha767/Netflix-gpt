import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './Login'
import Browser from './Browser'
import { auth } from './utilities/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { store_details_ofuser,delete_details_ofuser } from './utilities/sliceofstore/Userslice'
function Body() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        }
    ])
    const dispatch=useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            console.log(user);
            const {uid,displayName,email} = user;
            dispatch(store_details_ofuser({uid,displayName,email}));

           
            // ...
          } else {
            dispatch(delete_details_ofuser());
            // User is signed out
            // ...
          }
        });
      },[])
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body