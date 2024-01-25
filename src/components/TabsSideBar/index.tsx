import { AiOutlineSearch, AiOutlineStar, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setMusics, setSongFile } from '../../GlobalRedux/Modules/Musics/musicSlice'
import MusicDifficultyIndicator from '../MusicDifficultyIndicator'
import { Music, MusicCreate } from '../../interfaces/music.inteface'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { musicCreateSchema } from "../../validations/forms.validations";
import toast, { Toaster } from 'react-hot-toast';




const TabsSideBar = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useDispatch()
    const token = localStorage.getItem('@token')

    const handleCreateMusicValues = (data: MusicCreate) => {
        
        const formData = new FormData()
        formData.append('songName', data.songName)
        formData.append('artist', data.artist)
        formData.append('difficulty', data.difficulty)
        formData.append('data', data.data[0])

        api.post("/music", formData, {
            headers: {
                "Content-Type": 'multipart/form',
                Authorization: `bearer ${token}`
            }
        })
            .then(() => {
                toast.success('Music added to our database!')
            })
            .catch(() => {
                toast.error('Request failed.')
            })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(musicCreateSchema)
    })

    const onSubmitFunction = (data: any) => {
        console.log(data)
        handleCreateMusicValues(data)
    }

    useEffect(() => {
        const loadMusics = () => {
            api.get("/music")
                .then((res) => {
                    dispatch(setMusics(res.data))
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)
                    setTimeout(() => { loadMusics() }, 5000)
                })
        }
        loadMusics()
    }, [])

    const musics = useSelector((state: any) => state.music)

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
                        <div className='w-11/12 flex flex-col items-center justify-evenly mt-2 gap-2'>
                            <input type="text" placeholder='Pesquisar' className='w-full h-8 rounded-sm text-center text-[#000] outline-none' />
                            {
                                loading ? <svg className='animate-spin' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFF" fill-rule="evenodd" opacity="0.5" /><path d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z" fill="#FFF" /><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="#FFF" /></svg>
                                    :
                                    musics.musics.map((music: Music) => <div key={music.songName} className='w-full h-12 hover:bg-gray2 flex justify-between rounded-sm hover:cursor-pointer' onClick={() => {
                                        dispatch(setSongFile(music))
                                    }}>
                                        <div className='h-full flex flex-col items-start'>
                                            <p className='text-text font-semibold'>{music.songName}</p>
                                            <p className='text-text font-medium text-opacity-75'>{music.artist}</p>

                                        </div>
                                        <MusicDifficultyIndicator difficulty={music.difficulty} />
                                    </div>)}
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
                    sideBar === "sendTab" ? <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className='w-11/12 flex flex-col items-center gap-4 mt-2'>
                            <h3 className='text-2xl text-text'>Enviar Tab</h3>
                            <div className='w-full h-[1px] opacity-50 bg-text'></div>
                        </div>

                        <form className='flex flex-col h-full w-11/12 justify-evenly gap-5' onSubmit={handleSubmit(onSubmitFunction)}>
                            <input type="text"
                                placeholder='Nome da musica'
                                {...register('songName')}
                                className='outline-none rounded-sm h-10' />
                            {errors.songName?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.songName?.message}</span>
                                : <></>
                            }
                            <input type="text"
                                placeholder='Artista'
                                {...register('artist')}
                                className='outline-none rounded-sm h-10' />
                            {errors.artist?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.artist?.message}</span>
                                : <></>
                            }
                            <input type="number"
                                min={0} max={5}
                                placeholder='Dificuldade'
                                {...register('difficulty')}
                                className='outline-none rounded-sm h-10 w-24' />
                            {errors.difficulty?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.difficulty?.message}</span>
                                : <></>
                            }
                            <input type="file"
                                placeholder='Arquivo'
                                {...register('data')}
                                className='text-text rounded-sm' />
                            {errors.data?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.data?.message}</span>
                                : <></>
                            }
                            <p className='text-text text-sm'>.gp .gp3 .gp5 .gp7</p>
                            <button type='submit' className='w-14 h-10 bg-text rounded-sm font-medium'>Enviar</button>
                        </form>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default TabsSideBar