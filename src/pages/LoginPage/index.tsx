import { useNavigate } from "react-router";
import { BsArrowBarLeft } from "react-icons/bs";
import { IUserLogin } from "../../interfaces/user.interface";
import api from "../../services/api";
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginUserScheema } from "../../validations/forms.validations";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginValues = (data:IUserLogin ) => {
    api.post("/user/login", data)
    .then((res) => {toast.success('Logged with success!')
    setTimeout(() => {
      navigate("/home")
    },1000)
  })
  .catch((err) => {toast.error(err.response.data.message)})
  }

  const {

    register,
    handleSubmit,
    formState: {errors},
    reset: registerReset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginUserScheema)
  })

  const onSubmitFunction = (data:any) => {
    handleLoginValues(data)
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
        <h3 className="text-text font-bold text-2xl">Login</h3>
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
            className="w-full h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark"
          />
          {errors.password?.message ?
           <span className="text-[rgb(255,25,50)] font-semibold text-sm">{errors.password?.message}</span>
           : <></>
        }
        </div>

        <div className="flex flex-col items-center w-11/12">
          <button type="submit" className="w-full h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3">
            Logar
          </button>
          <p className="text-text text-xs font-bold">
            não possui uma conta?{" "}
            <a
              className="text-dark hover:text-gray3 cursor-pointer"
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
