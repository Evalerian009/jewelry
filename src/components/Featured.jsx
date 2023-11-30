import BraceletsImg from '../assets/bracelets.jpg'
import EaringsImg from '../assets/earings.jpg'
import NecklaceImg from '../assets/necklaces.jpg'

const Featured = () => {
  return (
    <div className="px-6 py-[50px]">
      <h2 className="uppercase text-center text-[1.5rem] text-amber-700">Popular Items</h2>
      <div className="py-7 flex flex-col md:flex-row md:justify-center gap-y-10 md:gap-x-3">
        <div className=''>
          <img src={EaringsImg} alt="earings" style={{height: 280, width: 300}} className='mx-auto'/>
          <button className='w-[150px] mt-5 mx-auto block rounded-sm py-[2px] bg-amber-800 text-amber-50'>Earings</button>
        </div>
        <div className=''>
          <img src={BraceletsImg} alt="earings" style={{height: 280, width: 300}} className='mx-auto'/>
          <button className='w-[150px] mt-5 mx-auto block rounded-sm py-[2px] bg-amber-800 text-amber-50'>Bracelets</button>
        </div>
        <div className=''>
          <img src={NecklaceImg} alt="earings" style={{height: 280, width: 300}} className='mx-auto'/>
          <button className='w-[150px] mt-5 mx-auto block rounded-sm py-[2px] bg-amber-800 text-amber-50'>Necklaces</button>
        </div>
      </div>
      <p className='text-center md:max-w-[800px] mx-auto py-5 text-amber-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante metus, rhoncus at lacus eget, elementum consectetur mauris. Etiam ullamcorper, leo non eleifend dictum, leo ipsum hendrerit dolor, non molestie lacus elit sollicitudin nisi.</p>
    </div>
  )
}

export default Featured