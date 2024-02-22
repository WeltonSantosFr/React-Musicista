import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {User} from '../../../interfaces/user.interface'

export interface UserState {
    user: User
}

export const initialState:UserState = {
    user: {
        username: "guest",
        email: "guest",
        password: "guest"
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer