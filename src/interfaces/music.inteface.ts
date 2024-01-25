export interface Music {
    songName: string
    artist: string
    difficulty: number
    data: {
        type: string
        data: ArrayBuffer
    }
}

export interface MusicCreate {
    songName: string
    artist: string
    difficulty: string
    data: FileList
}