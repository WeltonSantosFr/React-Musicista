import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaGuitar, FaHome, FaMusic, FaUserCircle } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { useNavigate } from "react-router";
import UserModal from "../UserModal";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "../../GlobalRedux/Modules/User/userSlice";
import { Toaster } from "react-hot-toast";
import { RootState } from "../../GlobalRedux/store";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../Button";

const Header = () => {
  const navigate = useNavigate();
  const [dropbar, setDropbar] = useState(false)
  const [userModal, setUserModal] = useState(false)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('/user/userInfo', { headers: { Authorization: `bearer ${localStorage.getItem("@token")}` } })
      .then((res) => {
        dispatch(setUser(res.data))
      })
      .catch((err) => console.error(err))

  }, [dispatch])

  return (
    <header className="flex items-center text-black dark:bg-black bg-white h-12 w-full justify-center border-b-[1px] border-solid border-b-gray-3 dark:border-b-gray-5 dark:text-gray-4 fixed top-0 z-50">
      <Toaster position="top-right" reverseOrder={false} />
      {
        userModal ? <UserModal setUserModal={setUserModal} /> : null
      }

      <div className="flex items-center h-10 w-11/12 justify-between">
        <div className="flex items-center hover:cursor-pointer hover:bg-gray-4 dark:hover:bg-gray-7 h-10 px-2 rounded-sm" onClick={() => navigate("/home")}>
          <FaGuitar className=" w-6 h-6" />
          <h1 className="font-bold text-xl">Musicista</h1>

        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className={`w-6 h-6 md:hidden transition ease-in-out text-black dark:text-gray-4 ${dropbar ? `rotate-90` : ``}`} />
        </div>

        <div className={`w-fit h-min  rounded-s-sm fixed top-12 ${dropbar ? `right-0 ` : `-right-48`} top-12 md:hidden bg-gray-2 dark:bg-gray-6 flex flex-col justify-evenly items-center transition-all transform ease-in-out`}>

          <Button onClick={() => navigate("/home")}>
            <FaHome className="ml-4" />
            Home
          </Button>
          <Button onClick={() => navigate("/lessons")}>
            <FaMusic className="ml-4" />
            Aulas
          </Button>
          <Button onClick={() => navigate("/forum")}>
            <MdForum className="ml-4" />
            Forum
          </Button>
          <Button onClick={() => {
            localStorage.clear()
            navigate("/")
          }}>
            <BsDoorOpenFill className="ml-4" />
            Logoff
          </Button>
          <Button onClick={() => {
            setUserModal(true)
            setDropbar(false)
          }}>
            {user.profileImagePath == null ? <FaUserCircle className="w-4 h-4 ml-4" /> : <img src={user.profileImagePath} className="w-4 h-4 rounded-full ml-4" />}
            <p className="text-ellipsis whitespace-nowrap overflow-hidden w-24">{user.username}</p>
          </Button>

        </div>


        <div className="hidden md:flex w-full justify-between ml-2">
          <div className="flex gap-2">

            <Button onClick={() => navigate("/home")}>
              <FaHome />
              Home
            </Button>
            <Button onClick={() => navigate("/lessons")}>
              <FaMusic />
              Aulas
            </Button>
            <Button onClick={() => navigate("/forum")}>
              <MdForum />
              Fórum
            </Button>


          </div>

          <div className="hidden md:flex gap-2">
            <Button onClick={() => setUserModal(true)}>
              {user.profileImagePath == null ? <FaUserCircle className="w-6 h-6" /> : <img src={user.profileImagePath} className="w-6 h-6 rounded-full" />}
              <p className="text-ellipsis whitespace-nowrap overflow-hidden w-24">{user.username}</p>
            </Button>
            <Button onClick={() => {
              localStorage.clear()
              navigate("/")
            }}>
              <BsDoorOpenFill />
            </Button>
            <ThemeToggle />
          </div>
        </div>



      </div>
    </header>
  );
};

export default Header;

