import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import { Navbar } from './Components/Navbar/Navbar';
import IndexPage from './Pages/IndexPage/IndexPage';
import Graph from "./Pages/Graph/Graph";
import BasicMao from './Pages/Map/BasicMao';
import { Main } from './Pages/Main/Main';

const Layout = () => {
   return (
    <div className="app">
    <Navbar />
    <Outlet />  
  </div>
   )
}
 
const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout />,
   children: [
    {
      path : "/",
      element: <IndexPage />
    },
    {
      path : "/map",
      element: <BasicMao />
    },
    {
      path : "/graph",
      element: <Graph />
    },
    {
      path : "/about",
      element: <Main/>
    },
   ],
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
