import { useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';

import * as placeService from './services/placeService'

import NewPlace from "./components/NewPlace/NewPlace"
import Dashboard from "./components/Dashboard/Dashboard"
import Details from "./components/Details/Details"
import EditPage from "./components/EditPage/EditPage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {
  const [places, setPlace] = useState([]);

  useEffect(() => {
  placeService.getAll()
  .then (result => {
    setPlace(result);
  })
  }, []);

  return (
    <>
      <div id="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard places={places}/>} />
            <Route path='/new-place' element={<NewPlace />} />

          </Routes>

         </main>

      </div>
      <Footer />
    </>
  )
}

export default App
