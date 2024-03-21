import api from "../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../GlobalRedux/store";
import { fetchUserPostsStart, fetchUserPostsSuccess } from "../../GlobalRedux/Modules/UserPosts/userPostsSlice";
import { Action } from "redux";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const fetchUserPosts = ():AppThunk<void> => async (dispatch) => {
    try {
        dispatch(fetchUserPostsStart())
        const res = await api.get("/post/userPosts", {
            headers:{ Authorization: `bearer ${localStorage.getItem("@token")}`}
        })
        dispatch(fetchUserPostsSuccess(res.data))
    } catch (error) {
        console.log(error)
    }
}