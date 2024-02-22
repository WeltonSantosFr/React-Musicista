import { FieldValues, SubmitHandler } from "react-hook-form"

export interface User {
    username:string
    email:string
    password:string
}

export interface UserLogin {
    email:string
    password:string
}

export interface UserRegister {
    email:string
    password:string
    passwordConfirmation: string
}

export interface UserUpdate {
    profileImage?: FileList
    username?: string
    email?: string
    password?: string
}

export interface RegisterUserForm {
    registerUserSubmit: SubmitHandler<FieldValues>
}

export interface RegisterForm {
    username:string
    email:string
    password:string
}

