import { Comment } from "./comment.interface"
import { Rating } from "./rating.interface"
import { User } from "./user.interface"

export interface Post {
    id:string
    title: string
    content: string
    createdAt: Date
    updatedAt:Date
    author: User
    ratings: Rating[]
    comments: Comment[]
}

export interface PostCreate {
    title:string
    content:string
}