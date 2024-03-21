import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import PostCreateModal from "../PostCreateModal"
import { Button } from "../Button"
import { UserPostsModal } from "../UserPostsModal"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../GlobalRedux/store"
import { fetchPosts } from "../../services/posts/fetchPosts"
import { UnknownAction } from "redux"
import { fetchPostsSuccess } from "../../GlobalRedux/Modules/Posts/postsSlice"

const Posts = () => {
    // const [posts, setPosts] = useState<Post[]>([])
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
    const [userPostsModal, setUserPostsModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    const postsState = useSelector((state:RootState) => state.posts)

    useEffect(() => {
       dispatch(fetchPosts() as unknown as UnknownAction)
    }, [dispatch])

    const applyFilters = () => {
        let sortedData = [...postsState.posts]

        if (activeFilters.date) {
            sortedData = sortedData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
        if (activeFilters.like) {
            sortedData = sortedData.sort((a, b) => b.ratings.length - a.ratings.length);
        }

        if (activeFilters.comment) {
            sortedData = sortedData.sort((a, b) => b.comments.length - a.comments.length);
        } 
        dispatch(fetchPostsSuccess(sortedData))
    }

    const handleCloseCreatePostModal = () => {
        setPostCreateModal(false)
    }

    const handleCloseUserPostsModal = () => {
        setUserPostsModal(false)
    }
    
    return (
        <>
            <PostCreateModal open={postCreateModal} onClose={handleCloseCreatePostModal} />
            <UserPostsModal open={userPostsModal} onClose={handleCloseUserPostsModal} />
            <div className="w-full h-full flex flex-col items-center flex-grow mx-auto my-0 overflow-y-hidden divide-y-[1px] divide-solid divide-gray-3 dark:divide-gray-5 md:w-8/12 border-x-[1px] border-solid border-x-gray-3 dark:border-x-gray-5 text-black dark:text-gray-4">



                <div className="w-11/12 flex justify-between items-center py-2">
                    <Button
                    onClick={() => setUserPostsModal(true)}
                        className="max-w-fit">
                        Meus Posts
                    </Button>
                    <Button onClick={() => setPostCreateModal(true)} className="max-w-fit">
                        Criar Post
                    </Button>

                </div>

                <div className={`w-full h-fit py-2 flex flex-col items-center justify-between gap-2 transition-all transform ease-linear`}>



                    <div className="w-11/12 flex justify-between items-center">


                        <p className="px-2">{postsState.posts.length} Posts</p>
                        <Button onClick={() => setFilterDiv(!filterDiv)} className="max-w-fit">
                            <FaFilter className="w-4 h-4" />
                            Filtros
                        </Button>

                    </div>



                    <div className={`${filterDiv ? "flex" : "hidden"} flex-col justify-evenly items-end gap-2 w-11/12 h-fit py-2 border-t border-solid border-gray-3 dark:border-gray-5 rounded-sm transition-all transform ease-linear`}>

                        <div className="w-full h-fit flex justify-between items-center">
                            <Button
                                className="max-w-fit"
                                onClick={() => {
                                    setActiveFilters({ date: true, like: false, comment: false })
                                    applyFilters()
                                }}>
                                Redefinir
                            </Button>
                            <Button
                                className="max-w-fit"
                                onClick={() => applyFilters()}>
                                Aplicar Filtros
                            </Button>

                        </div>


                        <div className="w-full h-fit flex justify-between items-center">

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <Button
                                    className="max-w-fit"
                                    onClick={() => setDateDropdown(!dateDropdown)}>
                                    Data
                                    <svg className={`w-2.5 h-2.5 ms-3 ${dateDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </Button>

                                <div className={`${dateDropdown ? "absolute" : "hidden"} top-11 flex flex-col rounded-sm bg-gray-2 divide-y divide-gray-3 dark:bg-gray-6 dark:divide-gray-5`}>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, date: true })}>Mais Novo</Button>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, date: false })}>
                                        Mais Antigo
                                    </Button>

                                </div>
                            </div>

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <Button
                                    className="max-w-fit"
                                    onClick={() => setLikeDropdown(!likeDropdown)}>
                                    Likes
                                    <svg className={`w-2.5 h-2.5 ms-3 ${likeDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </Button>

                                <div className={`${likeDropdown ? "absolute " : "hidden"} top-11 flex-col rounded-sm bg-gray-2 fixed divide-y divide-gray-3  dark:bg-gray-6 dark:divide-gray-5`}>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, like: true })}>
                                        Mais Likes
                                    </Button>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, like: false })}>
                                        Menos Likes
                                    </Button>
                                </div>
                            </div>

                            <div className="w-fit h-fit flex justify-evenly relative">
                                <Button
                                    className="max-w-fit"
                                    onClick={() => setCommentDropdown(!commentDropdown)}>
                                    Comentários
                                    <svg className={`w-2.5 h-2.5 ms-3 ${commentDropdown ? "rotate-180" : ""} transition ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </Button>

                                <div className={`${commentDropdown ? "absolute " : "hidden"} top-11 flex-col rounded-sm bg-gray-2 fixed divide-y divide-gray-3 dark:bg-gray-6 dark:divide-gray-5`}>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, comment: true })}>
                                        Mais Comentários
                                    </Button>
                                    <Button
                                        className="font-normal text-sm"
                                        onClick={() => setActiveFilters({ ...activeFilters, comment: false })}>
                                        Menos Comentários
                                    </Button>

                                </div>
                            </div>

                        </div>



                    </div>



                </div>

                {
                    postsState.posts.map((post) => (
                        <div key={post.id} className="w-full h-fit py-4 lg:h-36 flex flex-col items-center text-text hover:bg-gray2 shrink-0">
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
            </div >
        </>
    )
}

export default Posts