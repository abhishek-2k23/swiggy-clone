import Nav from "./Components/Nav.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import SingleRestaurant from "./Components/SingleRestaurant.jsx";
import Offer from "./pages/Offer.jsx";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const approuter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/restaurant/:id",
        element : <SingleRestaurant/>
      },
      {
        path : "/offer",
        element : <Offer/>
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