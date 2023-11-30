import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  
  function menuToggle() {
    setMenu( prev => !prev)
  }
  return (
    <div className="w-full flex justify-between bg-slate-50 py-7 items-baseline fixed left-0 top-0 z-50 px-6">
      <div className="hidden navlinks w-1/3 md:flex gap-x-6 justify-end uppercase text-amber-800">
        <a href="#home" className="hover:translate-y-[-2px]">Home</a>
        <a href="#about" className="hover:translate-y-[-2px]">About</a>
        <a href="#blog" className="hover:translate-y-[-2px]">Blog</a>
      </div>
      <div className="brand text-2xl text-amber-800">
        <a href="#home" className="hover:translate-y-[-2px]">Larana, Inc.</a>
      </div>
      <div className="hidden navlinks w-1/3 md:flex gap-x-6 justify-start uppercase text-amber-800">
        <a href="#shop" className="hover:translate-y-[-2px]">Shop</a>
        <a href="#contact" className="hover:translate-y-[-2px]">Contact</a>
        <a href="#help" className="hover:translate-y-[-2px]">Help</a>
      </div>
      <span className="md:hidden" onClick={menuToggle}>
        <FontAwesomeIcon 
          icon={menu ? faX : faBars} 
          fontSize={25} 
          className="text-amber-800 cursor-pointer"
        />
      </span>
      <div className={`md:hidden offcanvas flex flex-col absolute ${menu ? 'right-0' : 'right-[-350px]'} mt-[55px] w-[250px] bg-slate-50 p-5 h-[87.8vh] gap-y-5 font-bold text-amber-700`}>
        <a href="#home" className="hover:translate-x-1">Home</a>
        <a href="#about" className="hover:translate-x-1">About</a>
        <a href="#blog" className="hover:translate-x-1">Blog</a>
        <a href="#shop" className="hover:translate-x-1">Shop</a>
        <a href="#contact" className="hover:translate-x-1">Contact</a>
        <a href="#help"className="hover:translate-x-1">Help</a>
      </div>
    </div>
  )
}

export default Navbar