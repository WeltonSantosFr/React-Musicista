import { useEffect, useState } from "react"
import api from "../../services/api"
import { FaFilter } from "react-icons/fa"
import { Post } from "../../interfaces/post.interface"
import PostCreateModal from "../PostCreateModal"

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [activeFilters, setActiveFilters] = useState({
        date: true,
        comment: false,
        like: false
    })
    const [filterDiv, setFilterDiv] = useState<boolean>(false)
    const [dateDropdown, setDateDropdown] = useState<boolean>(false)
    const [likeDropdown, setLikeDropdown] = useState<boolean>(false)
    const [commentDropdown, setCommentDropdown] = useState<boolean>(false)
    const [postCreateModal, setPostCreateModal] = useState<boolean>(false)

    useEffect(() => {
        api.get("/post")
            .then((res) => {
                setPosts(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    const applyFilters = () => {
        let sortedData = [...posts]

        if (activeFilters.date) {
            sortedData = sortedData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
        if (activeFilters.like) {
            sortedData = sortedData.sort((a, b) => b.ratings.length - a.ratings.length);
        }

        if (activeFilters.comment) {
            sortedData = sortedData.sort((a, b) => b.comments.length - a.comments.length);
        }
        setPosts(sortedData)
    }
    

    return (
        <div className="w-full h-full flex flex-col items-center flex-grow mx-auto my-0 overflow-y-hidden divide-y-[1px] divide-solid divide-gray-3 md:w-8/12 border-x-[1px] border-solid border-x-gray-3">
                {
                    postCreateModal ? <PostCreateModal setPostCreateModal={setPostCreateModal}/> : null
                }

                <div className="w-11/12 flex justify-end items-center py-2">
                    <button className={`border rounded-sm p-2 flex gap-2 bg-white hover:bg-gray-2`} onClick={() => setPostCreateModal(true)}>
                        Criar Post
                    </button>
                </div>

                <div className={`w-full h-fit py-2 flex flex-col items-center justify-between gap-2 transition-all transform ease-linear`}>



                    <div className="w-11/12 flex justify-between items-center">


                        <p>{posts.length} Posts</p>
                        <button className={`border rounded-sm p-2 flex gap-2  ${filterDiv ? "bg-black text-white hover:bg-gray-6" : "bg-white hover:bg-gray-2"}`} onClick={() => setFilterDiv(!filterDiv)}>
                            <FaFilter className="w-4 h-4" />
                            Filtros
                        </button>
                    </div>



                    <div className={`${filterDiv ? "flex" : "hidden"} flex-col justify-evenly items-end gap-2 w-11/12 h-fit py-2 border-t border-solid border-gray-3 rounded-sm transition-all transform ease-linear`}>

                        <div className="w-full h-fit flex justify-between items-center">

                            <button className="border rounded-sm p-2 w-fit h-fit bg-black hover:bg-gray-6 text-white" onClick={() => {
                                setActiveFilters({ date: true, like: false, comment: false })
                                applyFilters()
                            }}>Redefinir</button>
                            <button className="border rounded-sm p-2 w-fit h-fit bg-black hover:bg-gray-6 text-white" onClick={() => applyFilters()}>Aplicar Filtros</button>
                        </div>


                        <div className="w-full h-fit flex justify-between items-center">

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <button
                                    className={`border rounded-sm p-2 ${dateDropdown ? "bg-black hover:bg-gray-6 text-white" : "bg-white hover:bg-gray-2 text-black} "} flex items-center z-50`}
                                    onClick={() => setDateDropdown(!dateDropdown)}>
                                    Data
                                    <svg className={`w-2.5 h-2.5 ms-3 ${dateDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div className={`${dateDropdown ? "absolute" : "hidden"} top-11 flex flex-col rounded-sm bg-gray-2 divide-y divide-gray-3`}>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, date: true })}>Mais Novo</button>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, date: false })}>Mais Antigo</button>
                                </div>
                            </div>

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <button
                                    className={`border rounded-sm p-2 ${likeDropdown ? "bg-black hover:bg-gray-6 text-white" : "bg-white hover:bg-gray-2 text-black} "} flex items-center z-50`}
                                    onClick={() => setLikeDropdown(!likeDropdown)}>
                                    Likes
                                    <svg className={`w-2.5 h-2.5 ms-3 ${likeDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div className={`${likeDropdown ? "absolute " : "hidden"} top-11 flex-col rounded-sm bg-gray-2 fixed divide-y divide-gray-3`}>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, like: true })}>Mais Likes</button>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, like: false })}>Menos Likes</button>
                                </div>
                            </div>

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <button
                                    className={`border rounded-sm p-2 ${commentDropdown ? "bg-black hover:bg-gray-6 text-white" : "bg-white hover:bg-gray-2 text-black} "} flex items-center z-50`}
                                    onClick={() => setCommentDropdown(!commentDropdown)}>
                                    Comentários
                                    <svg className={`w-2.5 h-2.5 ms-3 ${commentDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div className={`${commentDropdown ? "absolute " : "hidden"} top-11 flex-col rounded-sm bg-gray-2 fixed divide-y divide-gray-3`}>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, comment: true })}>Mais Comentários</button>
                                    <button className="p-2 text-sm hover:bg-gray-4" onClick={() => setActiveFilters({ ...activeFilters, comment: false })}>Menos Comentários</button>
                                </div>
                            </div>

                        </div>



                    </div>



                </div>

                {posts.map((post) => (
                    <div key={post.id} className="w-full h-fit py-4 lg:h-36 flex flex-col items-center text-text hover:bg-gray2 shrink-0">
                        <div className="w-11/12 h-full flex flex-col justify-center gap-2 lg:flex-row lg:gap-6 lg:items-center">
                            <div className="flex gap-2 items-center lg:flex-col lg:w-fit lg:items-start text-sm md:text-base lg:text-sm text-gray-4">
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
                ))}
            </div>
    )
}

export default Posts