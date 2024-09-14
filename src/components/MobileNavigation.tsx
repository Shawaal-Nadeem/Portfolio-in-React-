import { FiMenu } from "react-icons/fi"
import { useState } from "react"
import { IoClose } from "react-icons/io5"

import { FaHouse, FaMessage } from "react-icons/fa6"
import { FaTasks } from "react-icons/fa"
import { IoPerson } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

const MobileNavigation = () => {
  const [navCoverOpen, setNavCoverOpen] = useState(false)
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
      className="lg:hidden fixed z-[100] right-[10px] top-[20px] bg-gray-400/20 rounded-[6px] text-heading_color p-[7px]"
    >
      <FiMenu size={25} onClick={() => setNavCoverOpen(true)} />
      <AnimatePresence>
        {navCoverOpen && (
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            exit={{ x: -600 }}
            transition={{ duration: 0.6 }}
            className="h-screen bg-border_color z-[100] fixed w-full top-0 left-0"
          >
            <div className="relative min-h-full w-full px-[25px] border border-border_color">
              <span className="absolute right-[20px] top-[10px]">
                <IoClose size={30} onClick={() => setNavCoverOpen(false)} />
              </span>
              <div className="mt-[100px] flex flex-col gap-[20px] font-medium">
                <NavLink
                  onClick={() => setNavCoverOpen(false)}
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-main_color" : "text-heading_color"
                    } w-full flex items-center gap-[20px] justify-start border-b pb-[10px] border-gray-400/20 transition-all ease-in-out duration-[0.6s]`
                  }
                >
                  <span>
                    <FaHouse size={20} />
                  </span>

                  <span className="text-[20px]">Home</span>
                </NavLink>

                <NavLink
                  onClick={() => setNavCoverOpen(false)}
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-main_color" : "text-heading_color"
                    } w-full flex items-center gap-[20px] justify-start border-b pb-[10px] border-gray-400/20 transition-all ease-in-out duration-[0.6s]`
                  }
                >
                  <span>
                    <IoPerson size={20} />
                  </span>

                  <span className="text-[20px]">About</span>
                </NavLink>
                <NavLink
                  onClick={() => setNavCoverOpen(false)}
                  to="/projects"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-main_color" : "text-heading_color"
                    } w-full flex items-center gap-[20px] justify-start border-b pb-[10px] border-gray-400/20 transition-all ease-in-out duration-[0.6s]`
                  }
                >
                  <span>
                    <FaTasks size={20} />
                  </span>

                  <span className="text-[20px]">Projects</span>
                </NavLink>
                <NavLink
                  onClick={() => setNavCoverOpen(false)}
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-main_color" : "text-heading_color"
                    } w-full flex items-center gap-[20px] justify-start border-b pb-[10px] border-gray-400/20 transition-all ease-in-out duration-[0.6s]`
                  }
                >
                  <span>
                    <FaMessage size={20} />
                  </span>

                  <span className="text-[20px]">Contact</span>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MobileNavigation
