import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsDoorOpenFill, BsPencilSquare } from "react-icons/bs"
import { FaGuitar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const HeaderUnlogged = () => {
    const [dropbar, setDropbar] = useState(false)
    const navigate = useNavigate();

    return (
        <header className="flex items-center h-28 w-full justify-between">
            <div className="flex items-center">
                <FaGuitar className="text-text min-w-[1.563rem] min-h-[1.563rem]" />
                <h1 className="text-text font-bold text-3xl">Musicista</h1>
            </div>

            {dropbar ? <div className="w-24 h-20 rounded-md fixed top-16 right-[10%] bg-gray1 flex flex-col justify-evenly items-center">
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center" onClick={() => navigate("/login")}>Logar</button>
                <button className="w-full h-full text-text font-semibold hover:bg-dark text-center" onClick={() => navigate("/register")}>Registrar</button>
            </div> : null}
            <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className="text-text w-[1.563rem] h-[1.563rem] md:hidden" />

            <div className="hidden md:flex">
                <button
                    className="w-40 h-14  text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
                    onClick={() => navigate("/login")}
                >
                    <BsDoorOpenFill />
                    Logar
                </button>
                <button
                    className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
                    onClick={() => navigate("/register")}
                >
                    <BsPencilSquare />
                    Registrar
                </button>
            </div>
        </header>
    )
}

export default HeaderUnlogged