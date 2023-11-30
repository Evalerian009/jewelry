import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Reviews = () => {
  return (
    <div className="reviews">
      <div className="px-6 py-[60px] bg-[rgba(255,255,255,0.5)]">
        <div className="w-fit p-4 bg-[rgba(255,255,255,0.5)] mx-auto border-y-4 border-x border-amber-800">
          <h3 className="text-center text-[1.6rem] uppercase text-amber-800 py-5">Kind words</h3>
          <div className="text-center text-amber-700 flex gap-x-2 justify-center">
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalf}/>
          </div>
          <p className="text-center py-5 text-amber-800 max-w-[650px] mx-auto text-lg">
          In et vulputate nunc. Maecenas vel volutpat lacus. Nulla scelerisque bibendum molestie. Cras dapibus suscipit justo, eget vestibulum metus aliquet ac. Sed blandit diam libero, eu ultricies elit luctus ac. Nunc quis condimentum dolor.
          </p>
          <p className="py-7 text-center text-amber-900 italic">
            -Juliana Silha
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reviews