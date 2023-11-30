

const Footer = () => {
  return (
    <div className="py-10 px-6 md:flex md:items-center">
      <div className="md:flex md:w-1/2 md:items-center md:gap-x-10">
        <a href="#home" className="text-center block text-[1.5rem] font-extrabold text-amber-800 md:w-1/3">Larana, Inc.</a> 
        <div className="md:flex md:gap-x-14 md:pb-3 md:w-2/3">
            <div className="text-center flex flex-col uppercase text-amber-800 py-3">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            </div>
            <div className="text-center flex flex-col uppercase text-amber-800 py-3">
              <a href="#shop">Shop</a>
              <a href="#contact">Contact</a>
              <a href="#help">Help</a>
            </div>
        </div>       
      </div>
      <div className="w-full h-[2px] bg-amber-800 md:w-[2px] md:h-[100px]"></div>
      <div className="text-center py-3 text-amber-800 font-semibold md:w-1/2">
        <a href="#policy" className="">Terms & Conditions</a>
      </div>
    </div>
  )
}

export default Footer