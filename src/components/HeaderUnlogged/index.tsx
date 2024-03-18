import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { BsDoorOpenFill, BsPencilSquare } from "react-icons/bs"
import { FaGuitar } from "react-icons/fa"
import { ThemeToggle } from "../ThemeToggle"
import { Button } from "../Button"
import { LoginModal } from "../LoginModal"
import { RegisterModal } from "../RegisterModal"

const HeaderUnlogged = () => {
    const [dropbar, setDropbar] = useState<boolean>(false)
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [registerModal, setRegisterModal] = useState<boolean>(false)

    const handleCloseLoginModal = (openRegister?:boolean) => {
        setLoginModal(false)
        if(openRegister){
            setRegisterModal(true)
        }
    }
    
    const handleCloseRegisterModal = (openLogin?:boolean) => {
        setRegisterModal(false)
        if(openLogin) {
            setLoginModal(true)
        }
    }

    return (
        <header className="flex items-center dark:bg-black h-12 w-full justify-center border-b-[1px] border-solid border-b-gray-3 dark:border-b-gray-5 fixed top-0 z-50 text-black dark:text-gray-4">
            <LoginModal open={loginModal} onClose={handleCloseLoginModal}/>
            <RegisterModal open={registerModal} onClose={handleCloseRegisterModal}/>
            <div className="flex items-center h-10 w-11/12 justify-between">


                <div className="flex items-center h-10 px-2">
                    <FaGuitar className=" w-6 h-6" />
                    <h1 className="font-bold text-xl">Musicista</h1>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className={`w-6 h-6 md:hidden transition ease-in-out text-black dark:text-gray-4 ${dropbar ? `rotate-90` : ``}`} />
                </div>


                <div className={`w-fit h-min rounded-s-sm fixed top-12 ${dropbar ? `right-0 ` : `-right-32`} top-12 md:hidden bg-gray-2 dark:bg-gray-6 flex flex-col justify-evenly items-center transition-all transform ease-in-out`}>


                    <Button onClick={() => {
                        setLoginModal(!loginModal)
                        if(registerModal) {
                            setRegisterModal(false)
                        }
                        }}>
                        <BsDoorOpenFill className="ml-4" />
                        Logar
                    </Button>
                    <Button onClick={() => {
                        setRegisterModal(!registerModal)
                        if(loginModal) {
                            setLoginModal(false)
                        }
                        }}>
                        <BsPencilSquare className="ml-4" />
                        Registrar
                    </Button>

                </div>

                <div className="hidden md:flex gap-2">
                    <Button
                        onClick={() => {
                            setLoginModal(!loginModal)
                            if(registerModal) {
                                setRegisterModal(false)
                            }
                            }}
                    >
                        <BsDoorOpenFill />
                        Logar
                    </Button>
                    <Button onClick={() => {
                        setRegisterModal(!registerModal)
                        if(loginModal) {
                            setLoginModal(false)
                        }
                        }}>
                        <BsPencilSquare />
                        Registrar
                    </Button>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default HeaderUnlogged