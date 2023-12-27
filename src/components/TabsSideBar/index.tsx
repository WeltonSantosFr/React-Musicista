import { AiOutlineSearch, AiOutlineStar, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'
import { useState } from 'react'


const TabsSideBar = () => {
    const [search, setSearch] = useState<boolean>(false)


    const dropDown = () => {
        document.querySelector('#submenu')?.classList.toggle('hidden')
        document.querySelector('#arrow')?.classList.toggle('rotate-180')
    }

    const Openbar = () => {
        document.querySelector('.sidebar')?.classList.toggle('left-[-300px]')
        document.querySelector('.sidebar')?.classList.toggle('left-0')
    }

    return (
        <div className='w-24 h-full z-50 hidden'>
        
        <div className='bg-dark w-24 left-0 h-full flex flex-col absolute'>
            <div className="flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3" onClick={() => setSearch(!search)}>
                <AiOutlineSearch className="w-8 h-8"/>
                <span className="text-[12px] text-gray-200">Pesquisar</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3">
                <AiOutlineStar className="w-8 h-8"/>
                <span className="text-[12px] text-gray-200">Favoritos</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3">
                <AiOutlineUser className="w-8 h-8"/>
                <span className="text-[12px] text-gray-200">Suas Tabs</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md duration-300 cursor-pointer h-20 w-full  hover:bg-gray3">
                <AiOutlineUpload className="w-8 h-8"/>
                <span className="text-[12px] text-gray-200">Enviar Tab</span>
            </div>

        </div>
        {search ?
            <div className='absolute left-24 w-96 h-full bg-gray4 flex flex-col items-center z-10'>
                <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                <h3 className='text-2xl'>Pesquisar Tabs</h3>
                <div className='w-full h-[1px] opacity-50 bg-text'></div>
                </div>
                <div className='w-11/12 flex flex-col items-center justify-evenly mt-2'>
                    <input type="text" placeholder='Pesquisar' className='w-full h-8 rounded-sm text-center text-[#000]'/>

                </div>
            </div> : null
        }

        </div> 
    )
}

export default TabsSideBar