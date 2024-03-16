import { FieldValues, SubmitHandler } from "react-hook-form"

export interface User {
    id: string
    profileImagePath?: string
    username:string
    email:string
    password:string
    createdAt:Date
    updatedAt:Date
    isActive:boolean
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
    profileImagePath?: string
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

