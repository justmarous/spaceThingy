import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    time: 0
}

export const drawerSlice = createSlice({
    name: 'cockpit',
    initialState,
    reducers:{
        randomShit: (state,action)=>{
            return state
        },
    }
})

export const {randomShit} = drawerSlice.actions
export default drawerSlice.reducer