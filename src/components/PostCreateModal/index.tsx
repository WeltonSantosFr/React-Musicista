import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { postCreateScheema } from "../../validations/forms.validations"
import { PostCreate } from "../../interfaces/post.interface"
import api from "../../services/api"
import toast from "react-hot-toast"

interface PostModalProps {
    setPostCreateModal: React.Dispatch<React.SetStateAction<boolean>>
}


const PostCreateModal: React.FC<PostModalProps> = ({ setPostCreateModal }) => {

    const handleLoginValues = (data: PostCreate) => {
        setLoading(true)
        console.log(data)
        api.post("/post", data, { headers: {Authorization: `bearer ${localStorage.getItem("@token")}`}
        })
          .then(() => {
            toast.success('Created with success!')
            setLoading(false)
            setPostCreateModal(false)
            
          })
          .catch((err) => {
            console.error(err)
            toast.error('Creation failed.')
            setLoading(false)
          })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(postCreateScheema)
    })

    const onSubmitFunction = (data: PostCreate) => {
        handleLoginValues(data)
    }

    const [loading, setLoading] = useState<boolean>(false)

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-1 z-20 flex bg-opacity-20">
            <form
                action="update"
                className="bg-gray-2 w-11/12 md:w-2/4 lg:w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly mx-auto my-auto"
                onSubmit={handleSubmit(onSubmitFunction)}
            >
                <div className="w-11/12  h-full max-h-full flex flex-col items-center justify-between gap-5">
                    <MdClose className="text-text self-start ml-0 cursor-pointer mt-6 "
                        onClick={() => setPostCreateModal(false)} />
                    <h3 className="text-black font-bold text-lg">Criar Post</h3>
                    <div className="flex flex-col gap-5 w-full h-fit items-center ">

                        <input
                            type="text"
                            placeholder="Titulo"
                            {...register("title")}
                            className="w-full h-10 rounded-sm placeholder:text-gray-4 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black flex justify-between items-center" />
                        {errors.title?.message ?
                            <span className="text-red font-medium text-xs">{errors.title?.message}</span>
                            : <></>
                        }
                        <textarea id="content" placeholder="Conteudo" {...register("content")} maxLength={300} className="resize-none w-full h-20 placeholder:text-center placeholder:font-bold text-center placeholder:text-gray-4 outline-none flex items-center justify-center"></textarea>
                        {errors.content?.message ?
                            <span className="text-red font-medium text-xs">{errors.content?.message}</span>
                            : <></>
                        }
                    </div>
                    <button type="submit" className="mb-6 w-full h-10 rounded-md bg-black text-white font-bold text-xl hover:bg-gray-7 flex justify-center items-center">
                        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Criar</p>}
                    </button>
                </div>

            </form>

        </div>
    )
}

export default PostCreateModal