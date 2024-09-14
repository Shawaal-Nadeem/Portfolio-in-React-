import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  IoSettingsSharp,
  IoMoonOutline,
  IoSunnyOutline,
  IoClose,
} from "react-icons/io5"
import { themes } from "../utils/data"

const ThemeSwitcher = () => {
  const [showSwitcher, setShowSwitcher] = useState(false)
  const [theme, setTheme] = useState<"light-theme" | "dark-theme">(
    "light-theme"
  )

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  function setStyleColor(color: string): void {
    document.documentElement.style.setProperty("--main-color", color)
  }
  return (
    <div className="fixed left-0 top-[20px] z-[100]">
      <div className="relative ">
        <AnimatePresence>
          {!showSwitcher && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute top-0 left-0"
            >
              <div className="flex flex-col text-gray-600 items-center gap-[10px] text-[20px]">
                <span
                  onClick={() => setShowSwitcher(true)}
                  className="p-[10px] lg:p-[15px] bg-white border rounded-[5px] cursor-pointer"
                >
                  <IoSettingsSharp />
                </span>
                <span
                  onClick={() =>
                    setTheme((prev) =>
                      prev === "light-theme" ? "dark-theme" : "light-theme"
                    )
                  }
                  className="p-[10px] lg:p-[15px] border rounded-[5px] cursor-pointer bg-white"
                >
                  {theme === "light-theme" ? (
                    <IoMoonOutline />
                  ) : (
                    <IoSunnyOutline />
                  )}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showSwitcher && (
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute top-0 left-0 w-[200px] border bg-white border-gray-400 rounded-[5px] pb-[10px]"
            >
              <div className="w-full flex items-center justify-between py-[10px] px-[15px] border-gray-400 border-b mb-[15px] text-gray-600">
                <span>Style Switcher</span>
                <IoClose
                  size={20}
                  onClick={() => setShowSwitcher(false)}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-wrap gap-[5px] justify-center  w-full">
                {themes.map((item, key) => (
                  <img
                    key={key}
                    src={item.img}
                    alt="color"
                    className="w-[30px] cursor-pointer"
                    onClick={() => setStyleColor(item.color)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ThemeSwitcher
