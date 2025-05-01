import './App.css'
import BackToTop from './components/common/BackTop'
import Constructor from './components/home/Constructor'
import Event from './components/event_Page/Event'
import Footer from './components/common/Footer'
import Header from './components/event_Page/Header'
import HomeHeader from './components/home/HomeHeader'
import JoinUs from './components/home/JoinUs'
import LatestEvent from './components/home/LatestEvent'
import Special from './components/home/Special'

function App() {

  return (
    <>
      <Header />
      <BackToTop />
      <Event />
      <Footer />
      <HomeHeader />
      <Special />
      <Constructor />
      <LatestEvent />
      <JoinUs />
      <Footer />
    </>
  )
}

export default App
