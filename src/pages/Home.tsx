import SpecialButton from "../components/SpecialButton"
import { FaArrowRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="h-screen bg-body_color flex items-center justify-center relative overflow-hidden transition-all duration-[0.6s] ease-in-out">
      {/* color block */}
      <motion.div
        initial={{ opacity: 0, rotate: "0deg" }}
        animate={{ opacity: 1, x: 0, rotate: "-15deg" }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block bg-main_color absolute top-[-200px] lg:left-[-220px] 2xl:left-[-150px] h-[200%] w-[500px]"
      />

      {/* texts */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-w-[600px]"
      >
        <span className="font-bold text-main_color  relative text-center text-[35px] lg:text-[60px] before:w-[40px] lg:before:w-[50px] before:absolute before:h-[5px] before:bg-main_color before:top-[50%] before:left-[-60px] lg:before:left-[-70px] before:rounded-full">
          I'm Shawaal
        </span>
        <span className="font-bold text-main_color  relative text-[35px] text-center lg:text-[60px] ">
          A Web Developer
        </span>

        <p className="text-text_color text-justify leading-[25px] lg:leading-[35px] lg:tracking-[2px] mt-[15px] text-[14px] lg:text-[16px] px-[25px] transition-all duration-[0.6s] ease-in-out">
        I am a full stack developer specializing in creating user-focused digital experiences. Passionate about building scalable solutions, I focus on delivering high-quality software that enhances functionality and benefits users and businesses.

</p>

        <Link to="/about">
          <motion.div
            animate={{ y: [0, 20, 0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mt-[40px] lg:mt-[30px]"
          >
            <SpecialButton
              label="More about me"
              icon={<FaArrowRight size={20} />}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Home
