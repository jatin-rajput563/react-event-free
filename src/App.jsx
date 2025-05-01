import './App.css'
import BackToTop from './components/BackTop'
import Constructor from './components/Constructor'
import Event from './components/Event'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeHeader from './components/HomeHeader'
import JoinUs from './components/JoinUs'
import LatestEvent from './components/LatestEvent'
import Special from './components/Special'

function App() {

  return (
    <>
      <Header />
      <BackToTop />
      <Event />
      <Footer />
      <HomeHeader />
      <Special/>
      <Constructor/>
      <LatestEvent/>
      <JoinUs/>
      <Footer/>
    </>
  )
}

export default App
