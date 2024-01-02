import { AiOutlineSearch, AiOutlineStar, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react'


const TabsSideBar = () => {
    // const [search, setSearch] = useState<boolean>(false)
    // const [favorites, setFavorites] = useState<boolean>(false)
    // const [userTabs, setUserTabs] = useState<boolean>(false)
    // const [sendTab, setSendTab] = useState<boolean>(false)
    const [sideBar, setSideBar] = useState<string | null>(null)

    return (
        <div className='w-24 h-full'>

            <div className='bg-dark w-24 left-0 h-full flex flex-col justify-start z-10'>


                <div className="text-text flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full hover:bg-gray3" onClick={() => {
                    if (sideBar == null) {
                        setSideBar("search")
                        document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                        document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                        return
                    }
                    setSideBar(null)
                    document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                    document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                    return
                }}>
                    <AiOutlineSearch className="w-8 h-8" />
                    <span className="text-[12px] text-gray-200">Pesquisar</span>
                </div>
                <div className="text-text flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3" onClick={() => {
                    if (sideBar == null) {
                        setSideBar("favorites")
                        document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                        document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                        return
                    }
                    setSideBar(null)
                    document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                    document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                    return
                }}>
                    <AiOutlineStar className="w-8 h-8" />
                    <span className="text-[12px] text-gray-200">Favoritos</span>
                </div>
                <div className="text-text flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3" onClick={() => {
                    if (sideBar == null) {
                        setSideBar("userTabs")
                        document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                        document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                        return
                    }
                    setSideBar(null)
                    document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                    document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                    return
                }}>
                    <AiOutlineUser className="w-8 h-8" />
                    <span className="text-[12px] text-gray-200">Suas Tabs</span>
                </div>
                <div className="text-text flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3" onClick={() => {
                    if (sideBar == null) {
                        setSideBar("sendTab")
                        document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                        document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                        return
                    }
                    setSideBar(null)
                    document.getElementById("sideBar")?.classList.toggle("left-[90px]")
                    document.getElementById("sideBar")?.classList.toggle("-translate-x-full")
                    return
                }}>
                    <AiOutlineUpload className="w-8 h-8" />
                    <span className="text-[12px] text-gray-200">Enviar Tab</span>
                </div>


            </div>



            <div id='sideBar' className='fixed top-[70px] w-96 min-h-full bg-dark flex flex-col items-center z-10 -translate-x-full duration-500 ease-out transition-all indent-0'>
                {

                    sideBar === "search" ? <>
                        <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                            <h3 className='text-2xl text-text'>Pesquisar Tabs</h3>
                            <div className='w-full h-[1px] opacity-50 bg-text'></div>
                        </div>
                        <div className='w-11/12 flex flex-col items-center justify-evenly mt-2'>
                            <input type="text" placeholder='Pesquisar' className='w-full h-8 rounded-sm text-center text-[#000]' />

                        </div>
                    </>
                        : null
                }
                {
                    sideBar === "favorites" ? <>
                        <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                            <h3 className='text-2xl text-text'>Favoritos</h3>
                            <div className='w-full h-[1px] opacity-50 bg-text'></div>
                        </div>
                        <div className='w-11/12 flex flex-col items-center justify-evenly mt-2'>
                            <input type="text" placeholder='Pesquisar Favoritos' className='w-full h-8 rounded-sm text-center text-[#000]' />

                        </div>
                    </>
                        : null
                }

                {
                    sideBar === "userTabs" ? <>
                        <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                            <h3 className='text-2xl text-text'>Suas Tabs</h3>
                            <div className='w-full h-[1px] opacity-50 bg-text'></div>
                        </div>
                        <div className='w-11/12 flex flex-col items-center justify-evenly mt-2'>
                            <input type="text" placeholder='Pesquisar Suas Tabs' className='w-full h-8 rounded-sm text-center text-[#000]' />

                        </div>
                    </> : null
                }

                {
                    sideBar === "sendTab" ? <>
                        <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                            <h3 className='text-2xl text-text'>Enviar Tab</h3>
                            <div className='w-full h-[1px] opacity-50 bg-text'></div>
                        </div>
                        <div className='w-11/12 flex flex-col items-center justify-evenly mt-2'>
                            <input type="text" placeholder='Pesquisar Suas Tabs' className='w-full h-8 rounded-sm text-center text-[#000]' />

                        </div>
                    </> : null
                }
            </div>
        </div>
    )
}

export default TabsSideBar