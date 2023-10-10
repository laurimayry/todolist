import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './components/Home.jsx';
import Contact from './components/contact.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';

  const router = createBrowserRouter([
  {
    path: "/todolist/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }
]); 



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <RouterProvider router={router}  />
    
  </React.StrictMode>,)
