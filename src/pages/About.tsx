import Skills from "../components/Skills"
import SkillsSlider from "../components/SkillsSlider"
import { motion } from "framer-motion"
import Education from "../components/Education"

const About = () => {
  return (
    <div className="bg-body_color border border-body_color transition-all duration-[0.6s] ease-in-out">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1200px] mx-auto"
      >
        {/* big heading */}
        <h1 className="text-[45px] lg:text-[60px] font-bold text-heading_color text-center mt-[50px] transition-all duration-[0.6s] ease-in-out">
          About <span className="text-main_color">Me</span>
        </h1>

        <Skills />
      </motion.div>

      <SkillsSlider />

      <div className="border-t w-[50%] min-w-[300px] border-border_color my-[100px] mx-auto transition-all duration-[0.6s] ease-in-out" />

      <div className="max-w-[1200px]  mx-auto ">
        <Education />
      </div>
    </div>
  )
}

export default About
