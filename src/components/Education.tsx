import { EducationalData } from "../utils/data"
import { MdSchool } from "react-icons/md"
import { motion } from "framer-motion"
import SpecialButton from "../components/SpecialButton"
import { IoMdCloudDownload } from "react-icons/io"
import Resume from "../assets/shawaal-resume.pdf"

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-heading_color font-medium text-[25px] lg:text-[30px] mt-[50px] ml-[30px] lg:ml-0 transition-all duration-[0.6s] ease-in-out">
        Educational Background
      </h3>

      <div className="pl-[40px] flex flex-col sm:flex-row items-center justify-center gap-[70px] sm:gap-[20px] mt-[50px]">
        {EducationalData.map(({ label, desc, year }, key) => (
          <div
            key={key}
            className="transition-all duration-[0.6s] ease-in-out text-text_color w-full lg:w-[400px] lg:h-[160px] border-l relative flex flex-col items-start pl-[35px] gap-[10px]"
          >
            <span className="absolute top-[-20px] left-[-30px] p-[10px] sm:p-[15px] rounded-full bg-main_color text-white">
              <MdSchool size={25} />
            </span>

            <span className="font-medium text-[20px] text-heading_color transition-all duration-[0.6s] ease-in-out">
              {label}
            </span>
            <span>{year}</span>
            <p className="text-[14px] w-[90%] text-justify">{desc}</p>
          </div>
        ))}
      </div>

      <a
        href={Resume}
        download={true}
        className="w-fit mx-auto my-[50px] block"
      >
        <SpecialButton
          label="Download Resume"
          icon={<IoMdCloudDownload size={20} />}
        />
      </a>
    </motion.div>
  )
}

export default Education
