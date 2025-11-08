 import { createSlice } from "@reduxjs/toolkit";
 const CourseSlice = createSlice({


    name:"course",
    initialState:" null ",
    reducers:{
        addCource(state,actions) {
            state = actions.payload;
            return state;
        }


    }
 })
 export const {addCource} = CourseSlice.actions;
 export default CourseSlice.reducer;