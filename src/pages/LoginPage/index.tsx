import { useNavigate } from "react-router";
import { BsArrowBarLeft } from "react-icons/bs";
import { UserLogin } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginUserScheema } from "../../validations/forms.validations";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../components/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
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
        setTimeout(() => {
          navigate("/home")
        }, 1000)
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
    <div className="bg-white flex w-screen h-screen items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <form
        action="register"
        className="bg-gray-3 w-11/12 md:w-2/4 lg:w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <BsArrowBarLeft
          className="text-black self-start ml-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h3 className="text-black font-bold text-lg">Login</h3>
        <div className="flex flex-col gap-5 w-11/12">
          <Input placeholder="Email" {...register("email")}/>
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

        <div className="flex flex-col items-center w-11/12 gap-4">
          <button type="submit" className="w-full h-10 rounded-md bg-black text-white font-bold text-base hover:bg-gray-7 flex justify-center items-center">
            {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <p>Logar</p>}

          </button>
          <button type="button" className="w-full h-10 rounded-md bg-black text-white font-bold text-base hover:bg-gray-7 flex justify-center items-center" onClick={() => {
            localStorage.setItem('@token', 'guest')
            navigate('/home')}}>
            Entrar como convidado

          </button>
          <p className="text-black text-xs font-medium">
            não possui uma conta?{" "}
            <a
              className="text-blue-8 hover:text-blue-7 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              registrar-se
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
