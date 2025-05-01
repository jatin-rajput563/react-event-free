import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './view/Home'
import Event from './view/EventP'
import BackTop from './components/common/BackTop'
import NotFound from './components/common/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/feed' element={<NotFound/>} />
          <Route path='/festival' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <BackTop />
    </>
  )
}

export default App
