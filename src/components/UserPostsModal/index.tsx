import { MdClose } from "react-icons/md";
import { Modal } from "../Modal"
import { Post } from "../../interfaces/post.interface";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface UserPostsModalProps {
    open: boolean;
    onClose: () => void
}

export const UserPostsModal = ({ open, onClose }: UserPostsModalProps) => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        api.get("/post/userPosts", {headers: {Authorization: `bearer ${localStorage.getItem("@token")}`}})
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    
    

    return (
        <Modal open={open}>
            <div className={`w-full h-full flex flex-col items-center justify-between`}>

                <div className="flex items-center justify-between w-11/12 h-fit mt-6">

                    <MdClose
                        className="text-black dark:text-gray-4 cursor-pointer"
                        onClick={() => onClose()} />
                    <h3 className="text-black dark:text-gray-4 font-bold text-lg">User Posts</h3>
                    <div></div>
                </div>

                <div className="w-full h-[100%] mb-12 flex flex-col items-center justify-start gap-0 divide-y-[1px] divide-solid divide-y-gray-5 overflow-y-scroll">
                    {
                        posts.map((post) => (
                            <div key={post.id} className="w-full h-fit py-8 lg:h-36 flex flex-col items-center text-text hover:bg-gray2 shrink-0 flex-grow-0">
                                <div className="w-11/12 h-full flex flex-col justify-center gap-2 lg:flex-row lg:gap-6 lg:items-center">
                                    <div className="flex gap-2 items-center lg:flex-col lg:w-fit lg:items-start text-sm md:text-base lg:text-sm text-gray-4 dark:text-gray-5">
                                        {/* rating, comments, views */}
                                        <p className="text-text">{post.ratings.length} votes</p>
                                        <p className="">{post.comments.length} comments</p>
                                    </div>
                                    <div className="flex flex-col gap-2 lg:w-2/3">
                                        <div className="text-base md:text-lg lg:text-xl text-ellipsis whitespace-nowrap overflow-hidden">
                                            <h3 className="">
                                                <a className="text-gray1 text-ellipsis whitespace-nowrap overflow-hidden">{post.title}</a>
                                            </h3>
                                            <p className="text-xs md:text-sm lg:text-base text-ellipsis whitespace-nowrap overflow-hidden">{post.content}</p>
                                        </div>
                                        <div className="flex self-end justify-between w-full">
                                            <p className="text-xs md:text-xs">{new Date(post.updatedAt).toLocaleDateString('pt-BR')}</p>
                                            <div className="flex gap-2">
                                                <img src={post.author.profileImagePath} alt="profileImage" className="w-4 h-4 rounded-full" />
                                                <p className="text-xs md:text-xs">{post.author.username}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Modal>
    )
}