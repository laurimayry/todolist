import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import TabApp from './components/TabApp.jsx'
//import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/*import Home from './components/Home.jsx';
//import Todotable from './components/Todotable.jsx';
import Error from './components/Error.jsx';

  const router = createBrowserRouter([
  {
    path: "/todolist/",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true
      },
      {
        path: "table",
        element: <App />,
      }
    ]
  }
]); */



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <TabApp/>
    {/*<RouterProvider router={router}  />*/}
    
  </React.StrictMode>,)
