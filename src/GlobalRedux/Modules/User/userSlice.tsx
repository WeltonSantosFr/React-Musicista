import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {User} from '../../../interfaces/user.interface'

export const initialState:User = {
    id: 'guest',
    profileImagePath: undefined,
    username: "guest",
    email: "guest",
    password: "guest",
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    isActive: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action: PayloadAction<User>) => {
            state.id = action.payload.id
            state.username = action.payload.username
            state.email = action.payload.email
            state.password = action.payload.password
            state.profileImagePath = action.payload.profileImagePath
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer