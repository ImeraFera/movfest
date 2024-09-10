import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Categories from '../pages/Categories'
import Contact from '../pages/Contact'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile'


function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/filmler" element={<Dashboard />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kategoriler" element={<Categories />} />
            <Route path="/kategoriler/:kategori_ad" element={<Categories />} />
            <Route path="/filmler/:film_id" element={<MovieDetails />} />
            <Route path="/profilim" element={<Profile />} />
            <Route path="/kayit" element={<Register />} />
            <Route path="/giris" element={<Login />} />

            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}

export default MainRoutes