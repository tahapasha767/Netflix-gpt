import {createSlice} from "@reduxjs/toolkit"
const userslice=createSlice({
    name:"user",
    initialState:{
        details_of_user:null,
        flag_for_user:false
    },
    reducers:{
        store_details_ofuser:(state,action)=>{
            state.details_of_user=action.payload;
        },
        setflag:(state)=>{
            state.flag_for_user=true;

        },
        delete_details_ofuser:(state)=>{
            state.details_of_user=null;
        }
    }
})
export const{store_details_ofuser,delete_details_ofuser,setflag}=userslice.actions;
export default userslice.reducer;