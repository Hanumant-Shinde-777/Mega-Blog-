import { createSlice } from "@reduxjs/toolkit";

const initialStore ={
    status: false,
    userData: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{ 
        //for login
        login:(state, action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        //for logout
        logout:(state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

 export const {login, logout} = authSlice.actions;
export default authSlice.reducer;