import { BrowserRouter, NavLink } from "react-router-dom"
import { Routes,Route, Link,Navigate } from "react-router-dom"
//areglo de rutas
 
import logo from '../logo.svg'
import { Suspense } from "react"
import Users from "../03-forms/pages/Users"
import About from "../03-forms/pages/About"
import Home from "../03-forms/pages/Home"
import {FormikAbstrasction,FormikBasicPage,FormikComponents,FormikYupPage,RegisterPage} from "../03-forms/pages/index"
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
              <li>
                <NavLink to="/register">register</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic">formik-basic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup">formik-Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formikComponents">formikComponents</NavLink>
              </li>
              <li>
                <NavLink to="/formikAbstraction">formikAbstraction</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about" element={<About/>}>
             about
            </Route>
            <Route path="/register" element={<RegisterPage/>}>
             Register
            </Route>
            <Route path="/formik-basic" element={<FormikBasicPage/>}>
            formik-basic
            </Route>
            <Route path="/formik-yup" element={<FormikYupPage/>}>
            formik-Yup
            </Route>
            <Route path="/formikComponents" element={<FormikComponents/>}>
            formikComponents
            </Route>
            <Route path="/formikAbstraction" element={<FormikAbstrasction/>}>
            formikAbstraction
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