import Navbar from './components/Navbar'
import HeroText from './components/HeroText'
import Featured from './components/Featured'
import './App.css'
import Reviews from './components/Reviews'
import NewlyAdded from './components/NewlyAdded'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {

  return (
    <div className='main container mx-auto'>
      <Navbar />
      <HeroText />
      <Featured />
      <Reviews />
      <NewlyAdded />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
