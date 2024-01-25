import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Music } from "../../../interfaces/music.inteface";

export interface MusicsState {
    musics: Music[]
    songFile: null | Music,
}

export const initialState:MusicsState = {
    musics: [],
    songFile: null,
}

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setMusics:(state, action: PayloadAction<Music[]>) => {
            state.musics = action.payload
        },
        setSongFile:(state, action: PayloadAction<Music>) => {
            state.songFile = action.payload
        }
    }
})

export const {setMusics, setSongFile} = musicSlice.actions

export default musicSlice.reducer