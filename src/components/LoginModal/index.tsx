import { useNavigate } from "react-router";
import { UserLogin } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginUserScheema } from "../../validations/forms.validations";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal } from "../Modal";
import { MdClose } from "react-icons/md";
import { Button } from "../Button";

interface LoginModalProps {
  open: boolean;
  onClose: (value?:boolean) => void;
}

export const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleLoginValues = (data: UserLogin) => {
    setLoading(true)
    api.post("/user/login", data, {
    })
      .then((res) => {
        toast.success('Logged with success!')
        setLoading(false)
        localStorage.setItem('@token', res.data.token)
        navigate("/home")
      })
      .catch((err) => {
        console.error(err)
        toast.error('Login failed.')
        setLoading(false)
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginUserScheema)
  })

  const onSubmitFunction = (data: UserLogin) => {
    handleLoginValues(data)
  }

  return (
    <Modal action="register" onSubmit={handleSubmit(onSubmitFunction)} open={open}>
      <div className="w-11/12 min-h-full max-h-full flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full h-fit mt-6">

          <MdClose
            className="text-black dark:text-gray-4 cursor-pointer"
            onClick={() => onClose()} />
          <h3 className="text-black dark:text-gray-4 font-bold text-lg">Login</h3>
          <div></div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center gap-10">


          <div className="flex flex-col gap-5 w-full">
            <Input placeholder="Email" {...register("email")} />
            {errors.email?.message ?

              <span className="text-red font-medium text-xs">{errors.email?.message}</span>
              : <></>
            }
            <div className="w-full flex items-center gap-2">

              <Input type={showPassword ? "text" : "password"} placeholder="Senha" {...register("password")} />
              {
                showPassword ?
                  <FaEye className="text-black w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(false)} /> :
                  <FaEyeSlash className="text-black w-5 h-5 fixed ml-2 cursor-pointer" onClick={() => setShowPassword(true)} />
              }
            </div>
            {errors.password?.message ?
              <span className="text-red font-medium text-xs">{errors.password?.message}</span>
              : <></>
            }
          </div>
          <div className="flex flex-col items-center w-full gap-4">
            <Button type="submit" className="bg-black text-white">
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Logar</p>}

            </Button>
            <Button type="button"
              className="bg-black text-white"
              onClick={() => {
                localStorage.setItem('@token', 'guest')
                navigate('/home')
              }}>
              Entrar como convidado
            </Button>

            <p className="text-black text-xs font-medium">
              não possui uma conta?{" "}
              <a
                className="text-blue-8 hover:text-blue-7 cursor-pointer"
                onClick={() => onClose(true)}
              >
                registrar-se
              </a>
            </p>
          </div>

        </div>


      </div>


    </Modal>
  );
};