import { createSlice, nanoid, current } from "@reduxjs/toolkit";

// action + reducer
const initialState = {
  BlogData:{}
}

const Slice = createSlice({
  name: "addBlogSlice",
  initialState,
  reducers: {


    // update Blog
    updateBlog: (state, action) => {
     state.BlogData=action.payload
     console.log(action.payload)
    }



  }

});

export const { updateBlog } = Slice.actions
export default Slice.reducer