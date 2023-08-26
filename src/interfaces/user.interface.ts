import { FieldValues, SubmitHandler } from "react-hook-form"

export interface IUser {
    username:string
    email:string
    password:string
}

export interface IUserLogin {
    email:string
    password:string
}

export interface IRegisterUserForm {
    registerUserSubmit: SubmitHandler<FieldValues>
}

export interface IRegisterForm {
    username:string
    email:string
    password:string
}

