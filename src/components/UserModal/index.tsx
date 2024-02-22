import { FaUserCircle } from "react-icons/fa"
import { MdClose } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserUpdate } from "../../interfaces/user.interface";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../validations/forms.validations";
import toast, { Toaster } from "react-hot-toast";

interface UserModalProps {
    setUserModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UserModal: React.FC<UserModalProps> = ({ setUserModal }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const user = useSelector((state: any) => state.user.user)
    const [changeUsername, setChangeUsername] = useState<boolean>(false)
    const [changeEmail, setChangeEmail] = useState<boolean>(false)
    const [changePassword, setChangePassword] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleUpdateUserValues = (data: UserUpdate) => {
        setLoading(true)
        api.patch("/user", data, {
            headers: { Authorization: `bearer ${localStorage.getItem("@token")}` }
        })
            .then(() => {
                console.log("success")
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

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray1 z-20 flex bg-opacity-20">
            <form
                action="update"
                className="bg-gray2 w-11/12 md:w-2/4 lg:w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly mx-auto my-auto"
                onSubmit={handleSubmit(onSubmitFunction)}
            >

                {localStorage.getItem("@token") === "guest" ?
                    <div className="w-11/12 flex flex-col items-center gap-5">
                        <p className="font-bold text-text text-2xl">
                            Você não está logado
                        </p>
                        <button onClick={() => navigate("/login")} type="button" className="w-full h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3 flex justify-center items-center">
                            Login
                        </button>
                        <button onClick={() => navigate("/register")} type="button" className="w-full h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3 flex justify-center items-center">
                            Registro
                        </button>
                    </div>
                    : <div className="w-11/12 h-full flex flex-col items-center justify-between gap-5">



                        <MdClose className="text-text self-start ml-0 cursor-pointer mt-6"
                            onClick={() => setUserModal(false)} />




                        <div className="flex flex-col gap-5 w-full h-fit items-center ">

                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-text border-2">
                                {localStorage.getItem("@token") === "guest" ?
                                    <FaUserCircle className="text-text h-full w-full" /> :
                                    <div className="w-full h-full flex flex-col relative">
                                        <label htmlFor="profile" className="absolute w-full h-full bg-text bg-opacity-25 text-text font-medium text-xs text-center flex justify-center items-center cursor-pointer">Alterar</label>
                                        <input {...register("profileImage")} className="w-full h-full bg-text bg-opacity-25 text-text font-medium text-xs none" type="file" name="profile" id="profile" accept="image/*" />
                                        <img src="https://i.pinimg.com/originals/ea/af/e9/eaafe9cae2f515ce93bcb888ab48b2e2.jpg" alt="" className="w-full h-full" />
                                    </div>
                                }
                            </div>

                            <div className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark flex justify-between items-center">
                                {!changeUsername ? <>
                                    <p className="text-dark font-bold text-base">{user.username}</p>
                                    <button className="bg-dark text-text font-medium rounded-xl p-2" onClick={() => setChangeUsername(true)}>alterar</button>
                                </> : <>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        {...register("username")}
                                        className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark" />
                                </>}

                            </div>
                            {errors.username?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.username?.message}</span>
                                : <></>
                            }

                            <div className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark flex justify-between items-center">
                                {!changeEmail ? <>
                                    <p className="text-dark font-bold text-base">{user.email}</p>
                                    <button className="bg-dark text-text font-medium rounded-xl p-2" onClick={() => setChangeEmail(true)}>alterar</button>

                                </> : <>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        {...register("email")}
                                        className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark" />
                                </>}
                            </div>
                            {errors.email?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.email?.message}</span>
                                : <></>
                            }
                            <div className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark flex justify-between items-center">
                                {!changePassword ? <>
                                    <button className="bg-dark text-text font-medium rounded-xl p-2" onClick={() => setChangePassword(true)}>alterar senha</button>
                                </> : <div className="w-full flex items-center gap-2">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        id="password"
                                        {...register("password")}
                                        className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark" />
                                    {showPassword ? <FaEye className="text-dark w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(false)} />

                                        : <FaEyeSlash className="text-dark w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(true)} />}
                                </div>}
                            </div>
                            {errors.password?.message ?

                                <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.password?.message}</span>
                                : <></>
                            }


                        </div>
                        <button type="submit" className="mb-6 w-full h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3 flex justify-center items-center">
                            {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Salvar</p>}
                        </button>
                    </div>
                }



            </form>
        </div>
    )
}

export default UserModal