import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { postCreateScheema } from "../../validations/forms.validations"
import { PostCreate } from "../../interfaces/post.interface"
import api from "../../services/api"
import toast from "react-hot-toast"
import { Modal } from "../Modal"
import { Input } from "../Input"
import { Button } from "../Button"
import { useDispatch } from "react-redux"
import { fetchPosts } from "../../services/posts/fetchPosts"
import { UnknownAction } from "redux"

interface PostModalProps {
    open: boolean;
    onClose: () => void
}


const PostCreateModal: React.FC<PostModalProps> = ({ open, onClose }) => {
    const dispatch = useDispatch()

    const handleCreatePost = (data: PostCreate) => {
        setLoading(true)
        api.post("/post", data, {
            headers: { Authorization: `bearer ${localStorage.getItem("@token")}` }
        })
            .then(() => {
                dispatch(fetchPosts() as unknown as UnknownAction)
                toast.success('Created with success!')
                setLoading(false)
                onClose()

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
        handleCreatePost(data)
    }

    const [loading, setLoading] = useState<boolean>(false)

    return (
        
        <Modal action="register" onSubmit={handleSubmit(onSubmitFunction)} open={open}>
            <div className="w-11/12 min-h-full max-h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-between w-full h-fit mt-6">

                    <MdClose
                        className="text-black dark:text-gray-4 cursor-pointer"
                        onClick={() => onClose()} />
                    <h3 className="text-black dark:text-gray-4 font-bold text-lg">Criar Post</h3>
                    <div></div>
                </div>

                <div className="w-full h-full flex flex-col items-center justify-center gap-10">


                    <div className="flex flex-col gap-5 w-full">
                        <Input placeholder="Titulo" {...register("title")} />
                        {errors.title?.message ?

                            <span className="text-red font-medium text-xs">{errors.title?.message}</span>
                            : <></>
                        }
                        <textarea 
                        placeholder="Conteudo" 
                        {...register("content")}
                        className="w-full h-10 rounded-sm placeholder:text-gray-4 dark:bg-gray-2 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black"/>


                        {errors.content?.message ?
                            <span className="text-red font-medium text-xs">{errors.content?.message}</span>
                            : <></>
                        }
                    </div>
                    <div className="flex flex-col items-center w-full gap-4">
                        <Button type="submit" className="bg-black text-white">
                            {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Criar</p>} 

                        </Button>
                        

                        
                    </div>

                </div>


            </div>


        </Modal>


    )
}

export default PostCreateModal