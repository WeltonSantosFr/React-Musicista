import { useNavigate } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "../../validations/forms.validations";
import { IUser } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterValues =  (data: IUser) => {
    api.post("/user", data, {
      timeout: 5000,
    })
    .then((res) => {toast.success('Created with success!')
    setTimeout(() => {
      navigate("/home")
    },1000)
  })
    .catch((err) => {toast.error(err.response.data.message)
  })
  }

  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset: registerReset,
  } = useForm({
    mode: "onSubmit", 
    resolver: yupResolver(registerUserSchema)})

    const onSubmitFunction = (data:any) => {
      const newData = {
        username: data.email,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation
      }
      handleRegisterValues(newData)
    }

  return (
    <div className="bg-gray3 flex w-screen h-screen items-center justify-center">
      <Toaster position="top-right" reverseOrder={false}/>
      <form
        action="register"
        className="bg-gray2 w-11/12 md:w-2/4 lg:w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <BsArrowBarLeft
          className="text-text self-start ml-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h3 className="text-text font-bold text-2xl">Registro</h3>
        <div className="flex flex-col gap-5 w-11/12">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark"
          />
          {errors.email?.message ?
          
          <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.email?.message}</span>
        : <></>
        }
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark "
          />
          {errors.password?.message ?
           <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.password?.message}</span>
           : <></>
        }
          <input
            type="password"
            placeholder="Confirmar Senha"
            {...register("passwordConfirmation")}
            className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark"
          />
          {errors.passwordConfirmation?.message ?
           <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.passwordConfirmation?.message}</span>
           : <></>
        }
        </div>

        <div className="flex flex-col items-center w-full">
          <button type="submit" className="w-11/12 h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3">
            Registrar  
          </button>
          <p className="text-text text-xs font-bold ">
            já possui uma conta?{" "}
            <a
              className="text-dark hover:text-gray3 cursor-pointer"
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
