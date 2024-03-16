import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsDoorOpenFill, BsPencilSquare } from "react-icons/bs"
import { FaGuitar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../Button"

const HeaderUnlogged = () => {
    const [dropbar, setDropbar] = useState(false)
    const navigate = useNavigate();

    return (
        <header className="flex items-center bg-white h-12 w-full justify-center border-b-[1px] border-solid border-b-gray-3 fixed top-0 z-50">
            <div className="flex items-center h-10 w-11/12 justify-between">


                <div className="flex items-center h-10 px-2">
                    <FaGuitar className="text-black w-6 h-6" />
                    <h1 className="text-black font-bold text-xl">Musicista</h1>
                </div>
                <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className={`w-6 h-6 md:hidden transition ease-in-out text-black ${dropbar ? `rotate-90` : ``}`} />

                <div className={`w-32 h-min rounded-md fixed top-12 ${dropbar ? `right-0 ` : `-right-32`} top-12 md:hidden bg-gray-2 flex flex-col justify-evenly items-center transition-all transform ease-in-out`}>
                    <button
                        className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
                        onClick={() => navigate("/login")}>
                        <BsDoorOpenFill className="ml-4"/>
                        Logar
                    </button>
                    <button
                        className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
                        onClick={() => navigate("/register")}>
                        <BsPencilSquare className="ml-4"/>
                        Registrar
                    </button>
                </div>

                <div className="hidden md:flex gap-2">
                    <Button
                        // className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
                        onClick={() => navigate("/login")}
                    >
                        <BsDoorOpenFill />
                        Logar
                    </Button>
                    <button
                        className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
                        onClick={() => navigate("/register")}
                    >
                        <BsPencilSquare />
                        Registrar
                    </button>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}

export default HeaderUnlogged