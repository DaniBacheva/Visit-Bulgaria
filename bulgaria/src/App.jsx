import { Route, Routes, useNavigate } from 'react-router-dom';

import { PlaceProvider } from './contexts/PlaceContext';
import { AuthProvider } from './contexts/AuthContext';

import NewPlace from "./components/NewPlace/NewPlace"
import Dashboard from "./components/Dashboard/Dashboard"
import Details from "./components/Details/Details"
import EditPage from "./components/EditPage/EditPage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from './components/Logout/Logout';
//import RouteGuard from './components/common/RouteGuard';

function App() {

    return (
        <AuthProvider>
<PlaceProvider>
            <div id="wrapper">
                <Header />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                      <Route path='/new-place' element={
                          //  <RouteGuard>
                            <NewPlace/>
                       // </RouteGuard>
                      }/>
                        <Route path='/dashboard/:placeId' element={<Details />} />
                        <Route path='/dashboard/:placeId/edit' element={<EditPage />} />

                    </Routes>

                </main>

            </div>
            <Footer />
            </PlaceProvider>
        </AuthProvider>
    )
}

export default App
