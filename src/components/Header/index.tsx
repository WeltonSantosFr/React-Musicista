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
    <header className="flex items-center h-20 w-full justify-center bg-gray2 fixed top-0 z-50">
      <Toaster position="top-right" reverseOrder={false} />
      {
        userModal ? <UserModal setUserModal={setUserModal} /> : null
      }

      <div className="flex items-center h-20 w-11/12 justify-between">
        <div className="flex items-center hover:cursor-pointer" onClick={() => navigate("/home")}>
          <FaGuitar className="text-text min-w-[1.563rem] min-h-[1.563rem]" />
          <h1 className="text-text font-bold text-3xl">Musicista</h1>
        </div>

        {dropbar ? <div className="w-32 h-min rounded-md fixed top-16 right-[10%] bg-dark flex flex-col justify-evenly items-center">

          <button
            className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
            onClick={() => navigate("/home")}
          >
            <FaHome className="ml-4" />
            Home
          </button>
          <button
            className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
            onClick={() => navigate("/lessons")}
          >
            <FaMusic className="ml-4" />
            Aulas
          </button>
          <button
            className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
            onClick={() => navigate("/forum")}
          >
            <MdForum className="ml-4" />
            Forum
          </button>
          <button
            className="w-full h-14 text-text font-semibold hover:bg-[#000] flex justify-start items-center gap-5"
            onClick={() => {
              localStorage.clear()
              navigate("/")
            }}
          >
            <BsDoorOpenFill className="ml-4" />
            Logoff
          </button>

          <button className="w-full h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => {
              setUserModal(true)
              setDropbar(false)
            }}>
              {user.profileImagePath == null ? <FaUserCircle className="w-5 h-5" /> : <img src={user.profileImagePath} className="w-5 h-5 rounded-full"/>}
            

            {user.username.length > 6 ? user.username.substring(0, 6) + "..." : user.username}
          </button>

        </div> : null}
        <AiOutlineMenu onClick={() => setDropbar(!dropbar)} className="text-text w-[1.563rem] h-[1.563rem] md:hidden" />


        <div className="hidden md:flex">
          <button
            className="w-40 h-14
            text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => navigate("/home")}
          >
            <FaHome />
            Home
          </button>
          <button
            className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => navigate("/lessons")}
          >
            <FaMusic />
            Aulas
          </button>
          <button
            className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => navigate("/forum")}
          >
            <MdForum />
            Fórum
          </button>
          <button
            className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => {
              localStorage.clear()
              navigate("/")
            }}
          >
            <BsDoorOpenFill />
            Logoff
          </button>

          <button className="w-40 h-14 text-text rounded-xl font-semibold hover:bg-dark flex justify-center items-center gap-5"
            onClick={() => setUserModal(true)}>
            {user.profileImagePath == null ? <FaUserCircle className="w-6 h-6" /> : <img src={user.profileImagePath} className="w-6 h-6 rounded-full"/>}
            {user.username.length > 10 ? user.username.substring(0, 10) + "..." : user.username}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

