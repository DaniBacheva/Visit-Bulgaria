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
  //const [count, setCount] = useState(0)

  return (
    <>
      <div id="wrapper">
        <Header />

        <main>

           <Details />

        </main>

      </div>
      <Footer />
    </>
  )
}

export default App
