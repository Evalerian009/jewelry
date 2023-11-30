import { Carousel } from "flowbite-react"


const HeroText = () => {
  return (
    <div className="main">
      <div className="overlay w-full h-full flex flex-col justify-center items-center">
        <h1 className="max-w-[390px] text-5xl text-center text-amber-50 font-normal leading-[60px]">BESPOKE JEWELRY FOR ALL OCCASSIONS</h1>
        <button className="mt-10 bg-amber-50 px-7 py-[6px] rounded-3xl uppercase">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default HeroText