import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "../../validations/forms.validations";
import { UserRegister } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from 'react'
import { Input } from "../Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Modal } from "../Modal";
import { MdClose } from "react-icons/md";
import { Button } from "../Button";

interface RegisterModalProps {
  open: boolean;
  onClose: (value?:boolean) => void;
}

export const RegisterModal = ({ open, onClose }: RegisterModalProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleRegisterValues = (data: UserRegister) => {
    setLoading(true)
    api.post("/user", data, {
    })
      .then(() => {
        toast.success('Created with success!')
        setLoading(false)
        setTimeout(() => {
          navigate("/home")
        }, 1000)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        setLoading(false)
      })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerUserSchema)
  })

  const onSubmitFunction = (data: UserRegister) => {
    const newData = {
      username: data.email.split("@")[0],
      email: data.email,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation
    }
    handleRegisterValues(newData)
  }

  return (
    <Modal action="register" onSubmit={handleSubmit(onSubmitFunction)} open={open}>
      <div className="w-11/12 min-h-full max-h-full flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full h-fit mt-6">

          <MdClose
            className="text-black dark:text-gray-4 cursor-pointer"
            onClick={() => onClose()} />
          <h3 className="text-black dark:text-gray-4 font-bold text-lg">Registro</h3>
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
            <Input type={showPassword ? "text" : "password"} placeholder="Confirmar Senha" {...register("passwordConfirmation")} />
            {errors.email?.message ?

              <span className="text-red font-medium text-xs">{errors.email?.message}</span>
              : <></>
            }
          </div>
          <div className="flex flex-col items-center w-full gap-4">
            <Button type="submit" className="bg-black text-white">
              {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Registrar</p>}

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
              já possui conta uma conta?{" "}
              <a
                className="text-blue-8 hover:text-blue-7 cursor-pointer"
                onClick={() => onClose(true)}
              >
                logar
              </a>
            </p>
          </div>

        </div>


      </div>


    </Modal>
  );
};