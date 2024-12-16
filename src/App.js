import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import RootLayout from './Pages/Root'
import Error from "./Pages/Error";
import ProductItem from "./Pages/ProductItem";

function App() {


  // Another way of using Routes

  // const routerElem=createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/products" element={<Product/>}/>
  //   </Route>
  // )
  // const router=createBrowserRouter(routerElem);


  const router=createBrowserRouter([
    {path:'/',element:<RootLayout/>,errorElement:<Error/> ,children:[
      {path:"/",element: <Home/>},
      {path:'/products', element:<Product/>},
      {path:'/products/:productId',element:<ProductItem/>}  //for dynamic routing use : 
    ]},
   
  ])
  return <RouterProvider router={router}/>;
}
 
export default App;
