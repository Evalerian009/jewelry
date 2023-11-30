import Necklace from '../assets/worn_necklace.jpg'
import Earing from '../assets/necklaces2.jpg'
import Ring from '../assets/ring.jpg'

const NewlyAdded = () => {
  return (
    <div className='pt-[100px] flex flex-col md:flex-row justify-center gap-10 items-center py-[100px]'>
      <div className="grid">
        <div className="box1">
          <img src={Ring} alt="" />
        </div>
        <div className="box2">
          <img src={Necklace} alt="" />
        </div>
        <div className="box3">
          <img src={Earing} alt="" />
        </div>
      </div>
      <div className='text-center max-w-[450px] px-6'>
        <h3 className='text-2xl uppercase w-[150px] mx-auto leading-normal font-semibold text-amber-900'>New collection</h3>
        <p className='mx-auto py-8 text-amber-800'>
          Cras ut vestibulum mi. Quisque gravida velit dolor, id ullamcorper dolor sollicitudin ac. Donec ut consequat velit. Proin volutpat interdum enim, ac venenatis ex lobortis semper. Nunc hendrerit libero purus, sed vestibulum urna ornare sed.
        </p>
        <a href='#shop' className='font-bold uppercase text-amber-900'>Shop Now</a>
      </div>
    </div>
  )
}

export default NewlyAdded