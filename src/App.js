import Nav from "./Components/Nav.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import SingleRestaurant from "./Components/SingleRestaurant.jsx";
import Offer from "./pages/Offer.jsx";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { lazy,Suspense} from "react";
import ShimmerUi from "./Components/ShimmerUI.jsx";

//lazy loading
const Instamart = lazy(() => import("./Components/instamart.jsx"));

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
      },
      {
        path : "/instamart",
        element : (<Suspense fallback={<ShimmerUi/>}> <Instamart/> </Suspense> ) //suspence make it possible to wait till the file load.
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