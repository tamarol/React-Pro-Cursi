import { BrowserRouter, NavLink } from "react-router-dom"
import { Routes,Route, Link,Navigate } from "react-router-dom"
//areglo de rutas
 
import logo from '../logo.svg'
import { Suspense } from "react"
import Users from "../03-forms/pages/Users"
import About from "../03-forms/pages/About"
import Home from "../03-forms/pages/Home"
export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about" element={<About/>}>
             about
            </Route>
            <Route path="/users" element={<Users/>}>
              Users
            </Route>
            <Route path="/" element={<Home/>}>
              Home
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }