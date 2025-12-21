import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

import Layout from './Layout.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path:"about",
        element:<About/>
      },
       {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:userid",
        element:<User />
      },
      {
        path:"/github",
        loader: githubInfoLoader,
        element:<Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
