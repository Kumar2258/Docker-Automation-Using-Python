import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './routers/Dashboard.jsx';
import Pulled from './routers/Pulled.jsx';
import Running from './routers/Running.jsx';
import Start from './routers/Start.jsx';
// import Pulled from 
const router= createBrowserRouter([{path: "/", element:<App/>},
  {path: "/Dashboard", element:<Dashboard/>},
  {path: "/Pulled", element:<Pulled/>},
  {path: "/Running", element:<Running/>},
  {path: "/Start", element:<Start/>},
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
