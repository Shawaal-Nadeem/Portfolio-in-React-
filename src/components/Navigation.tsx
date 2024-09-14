import { FaHouse, FaMessage } from "react-icons/fa6"
import { FaTasks } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
const Navigation = () => {
  // const
  return (
    <motion.div
      initial={{ x: 100, y: -150 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
      className="hidden lg:flex fixed right-[30px] top-[50%] z-[100] flex-col justify-between h-[260px]"
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-main_color text-white" : "bg-gray-200 text-gray-600"
          } rounded-full block  p-[15px]  group relative cursor-pointer hover:bg-main_color hover:text-white duration-[0.6s] transition-all ease-in-out`
        }
      >
        <FaHouse size={22} />
        <p className="z-[-1] absolute right-[50%] rounded-l-full flex items-center justify-center  top-[50%] translate-y-[-50%] text-white w-[0px] group-hover:w-[120px] opacity-0 group-hover:opacity-100 duration-[0.6s] transition-all ease-in-out h-full bg-main_color">
          Home
        </p>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-main_color text-white" : "bg-gray-200 text-gray-600"
          } rounded-full block  p-[15px]  group relative cursor-pointer hover:bg-main_color hover:text-white duration-[0.6s] transition-all ease-in-out`
        }
      >
        <IoPerson size={22} />
        <p className="z-[-1] absolute right-[50%] rounded-l-full flex items-center justify-center  top-[50%] translate-y-[-50%] text-white w-[0px] group-hover:w-[120px] opacity-0 group-hover:opacity-100 duration-[0.6s] transition-all ease-in-out h-full bg-main_color">
          About
        </p>
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-main_color text-white" : "bg-gray-200 text-gray-600"
          } rounded-full block  p-[15px]  group relative cursor-pointer hover:bg-main_color hover:text-white duration-[0.6s] transition-all ease-in-out`
        }
      >
        <FaTasks size={22} />
        <p className="z-[-1] absolute right-[50%] rounded-l-full flex items-center justify-center  top-[50%] translate-y-[-50%] text-white w-[0px] group-hover:w-[120px] opacity-0 group-hover:opacity-100 duration-[0.7s] transition-all ease-in-out h-full bg-main_color">
          Projects
        </p>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-main_color text-white" : "bg-gray-200 text-gray-600"
          } rounded-full block  p-[15px]  group relative cursor-pointer hover:bg-main_color hover:text-white duration-[0.6s] transition-all ease-in-out`
        }
      >
        <FaMessage size={22} />
        <p className="z-[-1] absolute right-[50%] rounded-l-full flex items-center justify-center  top-[50%] translate-y-[-50%] text-white w-[0px] group-hover:w-[120px] opacity-0 group-hover:opacity-100 duration-[0.7s] transition-all ease-in-out h-full bg-main_color">
          Contact
        </p>
      </NavLink>
      
    </motion.div>
  )
}

export default Navigation
