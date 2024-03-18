import { FaUserCircle } from "react-icons/fa"
import { MdClose } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserUpdate } from "../../interfaces/user.interface";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../validations/forms.validations";
import toast from "react-hot-toast";
import { setUser } from "../../GlobalRedux/Modules/User/userSlice";
import { storage } from '../../../firebase'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { RootState } from "../../GlobalRedux/store";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Button } from "../Button";

interface UserModalProps {
    open: boolean;
    onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [changeUsername, setChangeUsername] = useState<boolean>(false)
    const [changeEmail, setChangeEmail] = useState<boolean>(false)
    const [changePassword, setChangePassword] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [file, setFile] = useState<File | null>(null)
    const user = useSelector((state: RootState) => state.user)

    const dispatch = useDispatch()

    const handleUpdateUserValues = async (data: UserUpdate) => {
        setLoading(true)

        if (file) {
            const storageRef = ref(storage, `profile_images/${user.id + Date.now()}`)
            await uploadBytes(storageRef, file)

            const imageUrl = await getDownloadURL(storageRef)
            data.profileImagePath = imageUrl

            const oldImageUrl = user.profileImagePath
            if (oldImageUrl !== null) {
                const oldImageRef = ref(storage, oldImageUrl)

                try {
                    await deleteObject(oldImageRef)
                } catch (err) {
                    return
                }
            }
        }

        api.patch("/user", data, {
            headers: { Authorization: `bearer ${localStorage.getItem("@token")}` }
        })
            .then((res) => {
                dispatch(setUser(res.data[0]))
                toast.success("Updated with success!")
                setLoading(false)
                onClose()
            })
            .catch(() => {
                toast.error("Update failed.")
                setLoading(false)
            })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(updateUserSchema)
    })

    const onSubmitFunction = (data: UserUpdate) => {
        handleUpdateUserValues(data)
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
        }
    }

    return (
        <Modal action="update" onSubmit={handleSubmit(onSubmitFunction)} open={open}>
            <div className="w-11/12 min-h-full max-h-full flex flex-col items-center justify-between">
                <div className="flex items-center justify-between w-full h-fit mt-6">

                    <MdClose
                        className="text-black dark:text-gray-4 cursor-pointer"
                        onClick={() => onClose()} />
                    <h3 className="text-black dark:text-gray-4 font-bold text-lg">User Info</h3>
                    <div></div>
                </div>

                <div className="w-full h-full flex flex-col items-center justify-center gap-10">

                    <div className="flex flex-col gap-5 w-full">

                        <div className="w-full h-fit rounded-xl outline-none text-center font-bold text-dark flex justify-between items-center">
                            <div className="w-20 h-20 md:w-20 md:h-20 rounded-full border-text border-2">
                                {user.profileImagePath === null ?
                                    <FaUserCircle className="text-text h-full w-full" /> :
                                    <img src={user.profileImagePath} alt="" className="w-full h-full rounded-full" />
                                }
                            </div>
                            {file ? <p className="text-xs text-black dark:text-gray-4">{file.name.substring(0, 10) + "..."}</p> : null}
                            <label htmlFor="profileImage" className="cursor-pointer rounded-sm w-fit h-10 text-center p-2 bg-black hover:bg-gray-3 text-white dark:text-gray-4 dark:hover:bg-gray-7 flex items-center justify-center">Alterar</label>
                            <input onChange={handleFileChange} className="hidden" type="file" name="profileImage" id="profileImage" accept="image/*" />
                        </div>
                        <div className="w-full h-10 rounded-sm outline-none text-center font-bold text-black flex justify-between items-center">
                            {!changeUsername ? <>
                                <p className="text-black dark:text-gray-4 font-medium text-base">{user.username}</p>
                                <Button className="max-w-fit p-2 bg-black text-white" onClick={() => setChangeUsername(true)}>Alterar</Button>
                            </> : <>
                                <Input placeholder="Username" {...register("username")} />
                            </>}
                        </div>
                        {errors.username?.message ?
                            <span className="text-[rgb(255,25,50)] font-medium text-xs">{errors.username?.message}</span>
                            : <></>
                        }
                        <div className="w-full h-10 rounded-sm outline-none text-center font-medium text-black flex justify-between items-center">
                            {!changeEmail ? <>
                                <p className=" font-medium text-base">{user.email}</p>

                                <Button className="max-w-fit p-2 bg-black text-white" onClick={() => setChangeEmail(true)}>Alterar</Button>

                            </> : <>
                                <Input placeholder="Email" {...register("email")} />
                            </>}
                        </div>
                        {errors.email?.message ?
                            <span className="text-[rgb(255,25,50)] font-medium text-xs">{errors.email?.message}</span>
                            : <></>
                        }
                        <div className="w-full h-10 rounded-sm outline-none text-center font-medium text-black flex justify-between items-center">
                            {!changePassword ? <>
                                <Button className="max-w-fit p-2 bg-black text-white" onClick={() => setChangePassword(true)}>Alterar Senha</Button>
                            </> : <div className="w-full flex items-center gap-2">

                                <Input type={showPassword ? "text" : "password"} placeholder="Senha" {...register("password")} />
                                {
                                    showPassword ?
                                        <FaEye className="text-black w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(false)} /> :
                                        <FaEyeSlash className="text-black w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(true)} />
                                }
                            </div>}
                        </div>
                        {errors.password?.message ?
                            <span className="text-[rgb(255,25,50)] font-medium text-xs">{errors.password?.message}</span>
                            : <></>
                        }
                    </div>
                    <Button type="submit" className="bg-black text-white">
                        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Salvar</p>}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default UserModal