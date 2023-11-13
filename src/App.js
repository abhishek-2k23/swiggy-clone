import Nav from "./Components/Nav.jsx"
import Body from "./Components/Body.jsx"
import Footer from "./Components/Footer.jsx"
import { Outlet, createBrowserRouter } from "react-router-dom"

export const approuter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body/>
      }
    ]
  }
])
function App(){
  return (
    <div>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
export default App;