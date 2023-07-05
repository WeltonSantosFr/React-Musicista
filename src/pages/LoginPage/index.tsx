import { useNavigate } from "react-router";
import { BsArrowBarLeft } from "react-icons/bs";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray3 flex w-screen h-screen items-center justify-center">
      <form
        action="register"
        className="bg-gray2 w-1/4 h-4/6 rounded-xl flex flex-col items-center justify-evenly"
      >
        <BsArrowBarLeft
          className="text-text self-start ml-5 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h3 className="text-text font-bold text-2xl">Login</h3>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            className="w-72 h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark"
          />
          <input
            type="text"
            placeholder="Senha"
            className="w-72 h-12 rounded-xl placeholder:text-dark/75 placeholder:font-bold placeholder:text-center outline-none text-center font-bold text-dark"
          />
        </div>

        <div className="flex flex-col items-center">
          <button className="w-80 h-14 rounded-xl bg-dark text-text font-bold text-2xl hover:bg-gray3">
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
