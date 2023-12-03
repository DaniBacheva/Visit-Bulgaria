import { Route, Routes } from 'react-router-dom';


import { AuthProvider } from './contexts/AuthContext';
import Path from './paths.js';

import RouteGuard from './components/common/RouteGuard';
import NewPlace from "./components/NewPlace/NewPlace";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import EditPage from "./components/EditPage/EditPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';


function App() {

    return (
        <AuthProvider>

            <div id="wrapper">
                <Header />

                <main>
                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Login} element={<Login />} />
                        <Route path={Path.Logout} element={<Logout />} />
                        <Route path={Path.Register} element={<Register />} />
                        <Route path={Path.Dashboard} element={<Dashboard />} />
                        <Route path={Path.DetailsPlace} element={<Details />} />

                        <Route element={<RouteGuard />}>
                            <Route path={Path.NewPlace} element={<NewPlace />} />
                            <Route path={Path.EditPlace} element={<EditPage />} />
                            <Route path={Path.Profile} element={<Profile />} />
                        </Route>
                    </Routes>
                </main>
            </div>
            <Footer />
        </AuthProvider>
    )
}

export default App
