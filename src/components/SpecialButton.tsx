const SpecialButton = ({
  label,
  icon,
}: {
  label: string
  icon: JSX.Element
}) => {
  return (
    <div className="cursor-pointer group flex items-center gap-[20px] border border-main_color pl-[35px] rounded-[30px]  relative overflow-hidden">
      <span className="z-20 group-hover:text-white text-text_color transition-all ease-in-out duration-[0.5s] ">
        {label}
      </span>
      <span className="rounded-full bg-main_color py-[15px] lg:py-[20px] px-[15px] lg:px-[20px] z-20 text-white">
        {icon}
      </span>
      <div className="top-0 group-hover:w-full w-0 right-0 z-10 h-full transition-all ease-in-out duration-[0.5s] bg-main_color absolute " />
    </div>
  )
}

export default SpecialButton
