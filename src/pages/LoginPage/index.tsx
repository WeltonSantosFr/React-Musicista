import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray3 flex w-screen h-screen items-center justify-center">
      <form
        action="register"
        className="bg-gray2 w-[31.25rem] h-[31.25rem] rounded-[0.625rem] flex flex-col items-center justify-evenly"
      >
        <h3 className="text-text font-bold text-2xl">Login</h3>

        <input
          type="text"
          placeholder="Username"
          className="w-[18.75rem] h-[3.125rem] rounded-[0.625rem] placeholder:text-dark/25 placeholder:font-bold placeholder:text-center outline-none text-center"
        />
        <input
          type="text"
          placeholder="Senha"
          className="w-[18.75rem] h-[3.125rem] rounded-[0.625rem] placeholder:text-dark/25 placeholder:font-bold placeholder:text-center outline-none text-center"
        />

        <div>
          <button className="w-[18.75rem] h-[3.125rem] rounded-[0.625rem] bg-dark text-text font-bold text-2xl hover:bg-gray3">
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
