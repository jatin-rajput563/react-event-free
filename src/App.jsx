import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './view/Home'
import Event from './view/EventP'
import BackTop from './components/common/BackTop'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/event' element={<Event/>}/>
     </Routes>
     </BrowserRouter>
     <BackTop/>
    </>
  )
}

export default App
