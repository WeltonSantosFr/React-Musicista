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
    <header className="flex items-center bg-white h-12 w-full justify-center border-b-[1px] border-solid border-b-gray-3 fixed top-0 z-50">
      <Toaster position="top-right" reverseOrder={false} />
      {
        userModal ? <UserModal setUserModal={setUserModal} /> : null
      }

      <div className="flex items-center h-10 w-11/12 justify-between">
        <div className="flex items-center hover:cursor-pointer hover:bg-gray-4 h-10 px-2 rounded-sm" onClick={() => navigate("/home")}>
          <FaGuitar className="text-black w-6 h-6" />
          <h1 className="text-black font-bold text-xl">Musicista</h1>

        </div>

        <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className={`w-6 h-6 md:hidden transition ease-in-out text-black ${dropbar ? `rotate-90` : ``}`} />

        <div className={`w-32 h-min rounded-md fixed top-12 ${dropbar ? `right-0 ` : `-right-32`} top-12 md:hidden bg-gray-2 flex flex-col justify-evenly items-center transition-all transform ease-in-out`}>
          <button
            className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
            onClick={() => navigate("/home")}
          >
            <FaHome className="ml-4" />
            Home
          </button>
          <button
            className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
            onClick={() => navigate("/lessons")}>
            <FaMusic className="ml-4" />
            Aulas
          </button>
          <button
            className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
            onClick={() => navigate("/forum")}>
            <MdForum className="ml-4" />
            Forum
          </button>
          <button
            className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
            onClick={() => {
              localStorage.clear()
              navigate("/")
            }}>
            <BsDoorOpenFill className="ml-4" />
            Logoff
          </button>
          <button className="w-full h-14 text-black font-semibold hover:bg-gray-4 flex justify-start items-center gap-5"
            onClick={() => {
              setUserModal(true)
              setDropbar(false)
            }}>
            {user.profileImagePath == null ? <FaUserCircle className="w-4 h-4 ml-4" /> : <img src={user.profileImagePath} className="w-4 h-4 rounded-full ml-4" />}
            <p className="text-ellipsis whitespace-nowrap overflow-hidden w-24">{user.username}</p>
          </button>
        </div>


        <div className="hidden md:flex w-full justify-between ml-2">
          <div className="flex gap-2">


            <button
              className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
              onClick={() => navigate("/home")}
            >
              <FaHome />
              Home
            </button>
            <button
              className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
              onClick={() => navigate("/lessons")}
            >
              <FaMusic />
              Aulas
            </button>
            <button
              className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
              onClick={() => navigate("/forum")}
            >
              <MdForum />
              Fórum
            </button>

          </div>

          <div className="hidden md:flex gap-2">
            <button className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1 rounded-sm"
              onClick={() => setUserModal(true)}>
              {user.profileImagePath == null ? <FaUserCircle className="w-6 h-6" /> : <img src={user.profileImagePath} className="w-6 h-6 rounded-full" />}
              <p className="text-ellipsis whitespace-nowrap overflow-hidden w-24">{user.username}</p>
            </button>
            <button
              className="w-fit px-2 h-10 text-black font-normal hover:bg-gray-4 flex justify-center items-center gap-1"
              onClick={() => {
                localStorage.clear()
                navigate("/")
              }}
            >
              <BsDoorOpenFill />

            </button>
          </div>
        </div>



      </div>
    </header>
  );
};

export default Header;

