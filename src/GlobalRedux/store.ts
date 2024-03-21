import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Modules/User/userSlice'
import userPostsReducer from './Modules/UserPosts/userPostsSlice'
import postsReducer from './Modules/Posts/postsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        userPosts: userPostsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch