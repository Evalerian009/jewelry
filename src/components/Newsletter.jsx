

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="bg-[rgba(255,255,255,0.5)] py-[100px] px-6">
        <div className="w-fit p-4 bg-[rgba(255,255,255,0.5)] mx-auto border-y-4 border-x border-amber-800">
          <h3 className="text-center text-[1.6rem] uppercase text-amber-800 py-5 max-w-[500px]">Sign up for our newsletter to get flat 10% off your first order!</h3>
          <div className="">
            <input type="text" className="email rounded-sm h-[40px] mx-auto block focus:border-amber-800 border-amber-800 active:ring-0 focus:ring-0"/>
            <input type="submit" className="block  my-3 mx-auto bg-amber-100 rounded-sm px-6 py-1 posit text-amber-800 uppercase border border-amber-800 font-semibold hover:text-amber-50 hover:bg-amber-800"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter