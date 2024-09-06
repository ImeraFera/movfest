import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from '../pages/Movies'
import Dashboard from '../pages/Dashboard'
import Populars from '../pages/Populars'
import Categories from '../pages/Categories'
import Contact from '../pages/Contact'
import NewMovies from '../pages/NewMovies'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/filmler" element={<Movies />} />
            <Route path="/populer" element={<Populars />} />
            <Route path="/yeniler" element={<NewMovies />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kategoriler" element={<Categories />} />
            <Route path="/kategoriler/:kategori_ad" element={<Categories />} />
            <Route path="/filmler/:film_id" element={<MovieDetails />} />
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}

export default MainRoutes