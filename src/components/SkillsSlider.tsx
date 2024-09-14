import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { skillsData } from "../utils/data"
import { motion } from "framer-motion"

const SkillsSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Adjust the speed as necessary
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear", // Ensures continuous scrolling
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          // slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="my-[100px]"
    >
      <Slider {...settings}>
        {skillsData.map((item, index) => (
          <div className="" key={index}>
            <img
              src={item.img}
              alt="image"
              className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default SkillsSlider
