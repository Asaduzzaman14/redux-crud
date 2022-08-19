
import { configureStore } from "@reduxjs/toolkit"
// import postReducer from "./postSlice";
import postsReducers from "./postsSlices";

const store = configureStore({
    reducer: {
        // postReducer: postReducer,
        postsReducers: postsReducers
    }
})

export default store;