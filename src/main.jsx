import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import SignUp from './Pages/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Blog from './Pages/Blog.jsx';
import AllBarbies from './Pages/AllBarbies.jsx';
import MyBarbies from './Pages/MyBarbies.jsx';
import AddBarbie from './Pages/AddBarbie.jsx';
import PrivateRouter from './Router/PrivateRouter.jsx';
import SeeDetails from './Components/SeeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/allBarbies",
        element: <AllBarbies></AllBarbies>
      },
      {
        path: "/barbie/:id",
        element: <SeeDetails></SeeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/barbies/${params.id}`)
      },
      {
        path: "/myBarbies",
        element: <PrivateRouter><MyBarbies></MyBarbies></PrivateRouter>
      },
      {
        path: "/addBarbie",
        element: <PrivateRouter><AddBarbie></AddBarbie></PrivateRouter>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
