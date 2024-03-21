import api from "../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../GlobalRedux/store";
import { Action } from "redux";
import { fetchPostsStart, fetchPostsSuccess } from "../../GlobalRedux/Modules/Posts/postsSlice";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const fetchPosts = ():AppThunk<void> => async (dispatch) => {
    try {
        dispatch(fetchPostsStart())
        const res = await api.get("/post")
        dispatch(fetchPostsSuccess(res.data))
    } catch (error) {
        console.log(error)
    }
}