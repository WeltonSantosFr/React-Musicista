import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineArrowDown } from 'react-icons/ai'
import { FaHome, FaBookmark, FaSearch, FaMusic } from 'react-icons/fa'
import { FaMessage, FaEnvelopeOpenText } from 'react-icons/fa6'
import { BsArrowBarLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()

    const dropDown = () => {
        document.querySelector('#submenu')?.classList.toggle('hidden')
        document.querySelector('#arrow')?.classList.toggle('rotate-180')
    }

    const Openbar = () => {
        document.querySelector('.sidebar')?.classList.toggle('left-[-300px]')
        document.querySelector('.sidebar')?.classList.toggle('left-0')
    }

    return (
        <div>
            <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={Openbar}>
                <AiOutlineArrowRight className="text-text w-5 h-5" />
            </span>
            <div className="sidebar fixed top-0 bottom-0 left-[-300px] transition-all ease-linear duration-200
    p-2 w-[300px] overflow-y-auto text-center bg-dark shadow h-screen">
                <div className="text-text text-xl">
                    <div className="py-2.5 mt-3 flex items-center justify-center rounded-md">

                        <h1 className="text-[15px] ml-1 text-xl text-text font-bold">Musicista</h1>
                        <AiOutlineArrowLeft className="text-text ml-36 cursor-pointer w-5 h-5" onClick={Openbar} />
                    </div>
                    <hr className="my-2 text-gray-600" />

                    <div>
                        <div className="py-2.5 mt-3 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700">
                            <FaSearch className="w-5 h-5" />
                            <input className="text-[15px] text-[#000] ml-4 w-full bg-transparent focus:outline-none rounded-sm" placeholder="Search" />
                        </div>

                        <div className="py-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                            <FaHome />
                            <span className="text-[15px] ml-4 text-gray-200">Home</span>
                        </div>
                        <div className="py-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                            <FaBookmark className="w-5 h-5" />
                            <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
                        </div>
                        <div className="py-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600" onClick={() => navigate("/tabs")}>
                            <FaMusic className="w-5 h-5" />
                            <span className="text-[15px] ml-4 text-gray-200">Tabs</span>
                        </div>
                        <hr className="my-4 text-gray-600" />
                        <div className="py-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
                            <FaEnvelopeOpenText className="w-5 h-5" />
                            <span className="text-[15px] ml-4 text-gray-200">Messages</span>
                        </div>

                        <div className="py-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
                            <FaMessage className="w-5 h-5" />
                            <div className="flex justify-between w-full items-center" onClick={dropDown}>
                                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                                <span className="text-sm rotate-180" id="arrow">
                                    <AiOutlineArrowDown />
                                </span>
                            </div>
                        </div>
                        <div className=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto" id="submenu">
                            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Social</h1>
                            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Personal</h1>
                            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">Friends</h1>
                        </div>
                        <div className="py-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600" onClick={() => navigate("/")}>
                            <BsArrowBarLeft className="text-text w-5 h-5" />
                            <span className="text-[15px] ml-4 text-gray-200">Logout</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar