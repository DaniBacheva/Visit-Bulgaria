import { useState, useEffect} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as placeService from './services/placeService'
import { AuthContext } from './contexts/AuthContext';

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
  const navigate = useNavigate();
  const [places, setPlace] = useState([]);
  const [auth,setAuth] = useState({});

  useEffect(() => {
  placeService.getAll()
  .then (result => {
    setPlace(result);
  })
  }, []);

  const onAddPlaceSubmit = async (data) =>{

    const newPlace = await placeService.create(data);
   setPlace(state=> [...state, newPlace])
   navigate('/dashboard')
  }

  const onLoginSubmit = async (e)=>   {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)))
  };


  return (
    <AuthContext.Provider value={{onLoginSubmit}}>
   
      <div id="wrapper">
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login onLoginSubmit={onAddPlaceSubmit} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard places={places}/>} />
            <Route path='/new-place' element={<NewPlace onAddPlaceSubmit={onAddPlaceSubmit}/>} />
            <Route path='/dashboard/:placeId' element={<Details />} />

          </Routes>

         </main>

      </div>
      <Footer />
   </AuthContext.Provider> 
  )
}

export default App
