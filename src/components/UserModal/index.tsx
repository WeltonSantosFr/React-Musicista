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

interface UserModalProps {
    setUserModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UserModal: React.FC<UserModalProps> = ({ setUserModal }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [changeUsername, setChangeUsername] = useState<boolean>(false)
    const [changeEmail, setChangeEmail] = useState<boolean>(false)
    const [changePassword, setChangePassword] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [file, setFile] = useState<File |null >(null)
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
                setUserModal(false)
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
        <Modal action="update" onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="w-11/12 h-full flex flex-col items-center justify-between gap-5">
                <MdClose className="text-text self-start ml-0 cursor-pointer mt-6"
                    onClick={() => setUserModal(false)} />
                <div className="flex flex-col gap-5 w-full h-fit items-center ">
                    <div className="w-full h-fit rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark flex justify-between items-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-text border-2">
                            {user.profileImagePath === null ?
                                <FaUserCircle className="text-text h-full w-full" /> :
                                <img src={user.profileImagePath} alt="" className="w-full h-full rounded-full" />
                            }
                        </div>
                        {file ? <p className="text-sm">Selecionado: {file.name.substring(0, 8) + "..."}</p> : null}
                        <label htmlFor="profileImage" className="border-[1px] border-solid border-black cursor-pointer text-black p-2 rounded-sm">alterar</label>
                        <input onChange={handleFileChange} className=" hidden" type="file" name="profileImage" id="profileImage" accept="image/*" />
                    </div>
                    <div className="w-full h-10 rounded-sm placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark flex justify-between items-center">
                        {!changeUsername ? <>
                            <p className="text-dark font-medium text-base">{user.username}</p>
                            <button type="button" className="border-[1px] border-solid border-black text-black font-medium rounded-sm p-2" onClick={() => setChangeUsername(true)}>alterar</button>
                        </> : <>
                            <Input placeholder="Username" {...register("username")} />
                        </>}
                    </div>
                    {errors.username?.message ?
                        <span className="text-[rgb(255,25,50)] font-medium text-xs">{errors.username?.message}</span>
                        : <></>
                    }
                    <div className="w-full h-10 rounded-sm placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black flex justify-between items-center">
                        {!changeEmail ? <>
                            <p className="text-black font-medium text-base">{user.email}</p>
                            <button className="border-[1px] border-solid border-black bg-dark text-black font-medium rounded-sm p-2" onClick={() => setChangeEmail(true)}>alterar</button>

                        </> : <>
                            <Input placeholder="Email" {...register("email")} />
                        </>}
                    </div>
                    {errors.email?.message ?
                        <span className="text-[rgb(255,25,50)] font-medium text-xs">{errors.email?.message}</span>
                        : <></>
                    }
                    <div className="w-full h-10 rounded-sm placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-dark flex justify-between items-center">
                        {!changePassword ? <>
                            <button className="border-[1px] border-solid border-black text-black font-medium rounded-sm p-2" onClick={() => setChangePassword(true)}>alterar senha</button>
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
                <button type="submit" className="mb-6 w-full h-10 rounded-md bg-black text-white font-bold text-xl hover:bg-gray-7 flex justify-center items-center">
                    {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Salvar</p>}
                </button>
            </div>
        </Modal>
    )
}

export default UserModal