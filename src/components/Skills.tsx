import { skillsData } from "../utils/data"
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <div className="mb-[50px]">
      <h3 className="text-heading_color font-medium text-[25px] lg:text-[30px] mt-[50px]  ml-[30px] lg:ml-0 transition-all duration-[0.6s] ease-in-out">
        My Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-[40px] lg:gap-[60px] mt-[25px] lg:mt-[50px]">
        {skillsData.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            key={index}
            className="flex cursor-pointer  flex-col justify-center items-center gap-[5px] skills-shadow rounded-[10px] w-[125px] h-[130px]"
          >
            <img
              src={item.img}
              alt="image"
              className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] object-cover"
            />
            <p className="text-text_color font-medium text-[14px] lg:text-[16px] transition-all duration-[0.6s] ease-in-out">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
