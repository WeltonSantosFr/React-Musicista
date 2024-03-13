import { useNavigate } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "../../validations/forms.validations";
import { UserRegister } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {useState} from 'react'

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false)

  const handleRegisterValues =  (data: UserRegister) => {
    setLoading(true)
    api.post("/user", data, {
    })
    .then(() => {
      toast.success('Created with success!')
      setLoading(false)
    setTimeout(() => {
      navigate("/home")
    },1000)
  })
    .catch((err) => {
      toast.error(err.response.data.message)
      setLoading(false)
  })
  }

  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm({
    mode: "onSubmit", 
    resolver: yupResolver(registerUserSchema)})

    const onSubmitFunction = (data:UserRegister) => {
      const newData = {
        username: data.email.split("@")[0],
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation
      }
      handleRegisterValues(newData)
    }

  return (
    <div className="bg-white flex w-screen h-screen items-center justify-center">
      <Toaster position="top-right" reverseOrder={false}/>
      <form
        action="register"
        className="bg-gray-3 w-11/12 md:w-2/4 lg:w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <BsArrowBarLeft
          className="text-black self-start ml-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h3 className="text-black font-bold text-lg">Registro</h3>
        <div className="flex flex-col gap-5 w-11/12">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className="w-full h-10 rounded-sm placeholder:text-gray-4 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black"
          />
          {errors.email?.message ?
          
          <span className="text-red font-medium text-xs">{errors.email?.message}</span>
        : <></>
        }
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            className="w-full h-10 rounded-sm placeholder:text-gray-4 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black "
          />
          {errors.password?.message ?
           <span className="text-red font-medium text-xs">{errors.password?.message}</span>
           : <></>
        }
          <input
            type="password"
            placeholder="Confirmar Senha"
            {...register("passwordConfirmation")}
            className="w-full h-10 rounded-sm placeholder:text-gray-4 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black"
          />
          {errors.passwordConfirmation?.message ?
           <span className="text-red font-medium text-xs">{errors.passwordConfirmation?.message}</span>
           : <></>
        }
        </div>

        <div className="flex flex-col items-center w-full">
          <button type="submit" className="w-11/12 h-10 rounded-md bg-black text-white font-bold text-base hover:bg-gray-7 flex justify-center items-center">
          {loading ? <AiOutlineLoading3Quarters className="animate-spin"/> : <p>Registrar</p>}

          </button>
          <p className="text-black text-xs font-medium ">
            já possui uma conta?{" "}
            <a
              className="text-blue-8 hover:text-blue-7 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
