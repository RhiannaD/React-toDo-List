import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/mui/package.json'
import NavBar from './components/NavBar/NavBar.tsx'
import ToDo from './components/ToDo/ToDo.tsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <NavBar/>
    <ToDo/>
  </React.StrictMode>,
)
