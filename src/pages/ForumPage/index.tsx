import { useEffect, useState } from "react"
import api from "../../services/api"
import MainLayout from "../../components/MainLayout"

const ForumPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get("/post")
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <MainLayout>
            <div className="w-full h-full flex flex-col items-center flex-grow m-auto mt-4 mb-4 overflow-y-hidden">


                {posts.map((post) => (
                    <div key={post.id} className="shadow-sm shadow-gray1 w-full h-48 lg:h-36 flex flex-col items-center text-text hover:bg-gray2 shrink-0">
                        <div className="w-11/12 h-full flex flex-col justify-center gap-2 lg:flex-row lg:gap-6 lg:items-center">
                            <div className="flex gap-2 items-center lg:flex-col lg:w-fit lg:items-start text-sm md:text-base lg:text-sm text-[#c4c4c4]">
                                {/* rating, comments, views */}
                                <p className="text-text">{post.rating.length} votes</p>
                                <p className="">0 comments</p>
                            </div>
                            <div className="flex flex-col gap-2 lg:w-2/3">
                                <div className="text-base md:text-lg lg:text-xl text-ellipsis whitespace-nowrap overflow-hidden">
                                    <h3 className="">
                                        <a className="text-gray1 text-ellipsis whitespace-nowrap overflow-hidden">{post.title}</a>
                                    </h3>
                                    <p className="text-xs md:text-sm lg:text-base text-ellipsis whitespace-nowrap overflow-hidden">{post.content}</p>
                                </div>
                                <div className="flex gap-2 self-end">
                                    <img src={post.author.imageProfilePath} alt="profileImage" className="w-4 h-4 rounded-full" />
                                    <p className="text-xs md:tetxt-sm">{post.author.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default ForumPage