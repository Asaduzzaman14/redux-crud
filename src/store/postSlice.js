// const { createSlice } = require("@reduxjs/toolkit");

// export const STATUSES = Object.freeze({
//     IDLE: "idle",
//     ERROR: "error",
//     LOADING: "loading"
// })

// const postSlice = createSlice({
//     name: "posts",
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },


//     reducers: {
//         setPosts(state, action) {
//             state.data = action.payload
//         },
//         setStatus(state, action) {
//             state.status = action.payload
//         },
//     }
// })

// export const { setPosts, setStatus } = postSlice.actions

// export default postSlice.reducer

// // thunk
// export function fetchProduct() {
//     return async function fetchPostsThunk(dispatch, getState) {

//         dispatch(setStatus(STATUSES.LOADING))
//         try {

//             const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//             const data = await res.json()
//             dispatch(setPosts(data))
//             dispatch(setStatus(STATUSES.IDLE))

//         }
//         catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.err))


//         }
//     }
// }



