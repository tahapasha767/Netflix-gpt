import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./sliceofstore/Userslice";
const appStore=configureStore({
    reducer:{
        user:userReducer,
    }
});
export default appStore;