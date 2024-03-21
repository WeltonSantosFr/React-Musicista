import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from '../../../interfaces/post.interface';

interface UserPostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: UserPostsState = {
    posts: [],
    loading: false,
    error: null
};

export const userPostsSlice = createSlice({
    name: 'userPosts',
    initialState,
    reducers: {
        fetchUserPostsStart(state) {
            state.loading = true;
        },
        fetchUserPostsSuccess(state, action: PayloadAction<Post[]>) {
            state.posts = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchUserPostsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchUserPostsStart, fetchUserPostsSuccess, fetchUserPostsFailure } = userPostsSlice.actions;

export default userPostsSlice.reducer;