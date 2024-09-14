import { ProjectsData } from "../utils/data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"

const ProjectItem = ({
  img,
  desc,
  techs,
  title,
  url,
}: {
  title: string
  img: string
  desc: string
  techs: string[]
  url: string
}) => {
  const [openProjectCover, setOpenProjectCover] = useState(false)
  return (
    <div className="w-[350px] h-[250px] mt-[40px] relative rounded-[10px] overflow-hidden group">
      <img src={img} alt="img" className="w-full h-full object-cover" />
      <div
        onClick={() => setOpenProjectCover(true)}
        className="cursor-pointer w-full h-full bg-main_color absolute top-0 left-0  flex items-center justify-center transition-all ease-in-out duration-[0.6s] opacity-0 group-hover:opacity-100"
      >
        <p className="text-white font-medium text-[18px] transition-all ease-in-out duration-[0.6s] translate-y-[-20px] group-hover:translate-y-0">
          {title}
        </p>
      </div>

      <AnimatePresence>
        {openProjectCover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenProjectCover(false)
              console.log("Hashir")
            }}
            className="fixed top-0 left-0 bg-black/70 z-[100] w-screen h-screen flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
              exit={{ scale: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[340px] sm:w-[550px] p-[15px] sm:p-[20px]  bg-container_color rounded-[10px] overflow-hidden relative"
            >
              <p className="text-main_color text-center text-[20px] sm:text-[30px] font-semibold w-[90%]">
                {title}
              </p>
              <div className="flex flex-col items-start mt-[20px] text-text_color">
                <p className="text-[18px] font-medium text-heading_color">
                  Tools:
                </p>
                {techs.map((item, key) => (
                  <li key={key} className="list-disc">
                    {item}
                  </li>
                ))}
              </div>
              <p className="text-[18px] font-medium text-heading_color mt-[15px]">
                Description:
              </p>
              <p className="text-left text-[14px] text-text_color mt-[5px]">
                {desc}
              </p>
              <p className="text-[18px] font-medium text-heading_color mt-[15px]">
                URL:
              </p>
              <motion.a
                href={url}
                className="text-left text-[14px] text-text_color mt-[5px]"
              >
                <motion.p whileHover={{ x: 20 }}>{url}</motion.p>
              </motion.a>
              <a href={url}>
                <motion.img
                  whileHover={{ y: -10 }}
                  src={img}
                  alt="img"
                  className="w-full h-[200px] sm:h-[250px] object-cover mt-[20px] rounded-[10px]"
                />
              </a>

              <span
                className="absolute right-[15px] top-[15px] text-heading_color cursor-pointer"
                onClick={() => setOpenProjectCover(false)}
              >
                <IoClose size={25} />
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="pb-[50px] bg-body_color border border-body_color min-h-screen transition-all duration-[0.6s] ease-in-out ">
      <div className="max-w-[1200px] mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto"
        >
          <h1 className="text-[45px] lg:text-[60px] font-bold text-heading_color text-center mt-[50px] transition-all duration-[0.6s] ease-in-out ">
            My <span className="text-main_color">Projects</span>
          </h1>

          <div className="flex flex-wrap justify-evenly">
            {ProjectsData.map((item, index) => (
              <ProjectItem key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
