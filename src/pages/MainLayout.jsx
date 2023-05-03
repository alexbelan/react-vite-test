import React, { Suspense, lazy } from "react";
import { NavLink, Outlet, useNavigate, useOutlet } from "react-router-dom"
import { useAuth } from "../context/AuthProvider";
import PrivateRoute from "./PrivateRoute";

const MainPage = lazy(() => import('./MainPage'))

const MainLayout = () => {
    const outlet = useOutlet()
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <>
            <nav className="route-nav">
                <ul>
                    <li>
                        <NavLink to='/' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }} >
                            Main page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/character' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }} >
                            Characters
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/episode' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}>
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black",
                            };
                        }}>
                            Locations
                        </NavLink>
                    </li>
                    {auth.user ? (
                        <li>
                            <button onClick={auth.signout}>
                                logout
                            </button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={() => navigate('/login')}>
                                login
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
            <main>
                {outlet === null ? (
                    <Suspense fallback={'Loading...'}>
                        <MainPage />
                    </Suspense>
                    ) : (
                    <PrivateRoute>
                        <Suspense fallback={'Loading...'}>
                            <Outlet />
                        </Suspense>
                    </PrivateRoute>)
                }
            </main>
        </>
    )
}

export default MainLayout