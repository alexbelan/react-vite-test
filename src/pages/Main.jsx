import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";

const MainLayout = lazy(() => import('./MainLayout'))
const Category = lazy(() => import('./Category'))
const PostCharacter = lazy(() => import('./PostCharacter'))
const PostEpisode = lazy(() => import('./PostEpisode'))
const PostLocation = lazy(() => import('./PostLocation'))
const Login = lazy(() => import('./Login'))
const ErrorPage = lazy(() => import('./ErrorPage'))

const Main = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route>
                    <Route path={'/'} element={<MainLayout />} >
                        <Route path={'/character'} element={<Category />}  />
                        <Route path={'/character/:id'} element={<PostCharacter />} />
                        <Route path={'/episode'} element={<Category />}  />
                        <Route path={'/episode/:id'} element={<PostEpisode />} />
                        <Route path={'/location'} element={<Category />}  />
                        <Route path={'/location/:id'} element={<PostLocation />} />
                    </Route>
                    <Route path='/login' element={<Suspense fallback={'Loading...'}><Login/></Suspense> } />
                    <Route path='*' element={<Suspense fallback={'Loading...'}><ErrorPage /></Suspense>} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default Main