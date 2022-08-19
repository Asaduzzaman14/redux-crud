import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialPosts = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitaensequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iurenvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
    ]
}

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})


export const postsSlices = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        addPosts: (state, action) => {
            console.log(action.payload);
            state.posts.push(action.payload)
        },
        deletePosts: (state, action) => {
            const id = action.payload;
            state.posts = state.posts.filter(post => post.id !== id);
        },
        updatePosts: (state, action) => {
            const { id, title, body } = action.payload;
            const isExist = state.posts.filter(post => console.log(post.id = id));
            console.log(isExist);
            if (isExist) {
                isExist[0].title = title
                isExist[0].body = body
            }

        }
    },

})


export const { getPosts, setStatus, addPosts, deletePosts, updatePosts } = postsSlices.actions

export default postsSlices.reducer




export function fetchPosts() {
    return async function fetchPostsThunk(dispatch, getState) {

        dispatch(setStatus(STATUSES.LOADING))
        try {

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            const data = await res.json()
            dispatch(getPosts(data))
            dispatch(setStatus(STATUSES.IDLE))

        }
        catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.err))


        }
    }
}
fetchPosts()