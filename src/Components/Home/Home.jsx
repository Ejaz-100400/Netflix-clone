import React from 'react'
import LoginHeader from './HomeHeader/LoginHeader'
import MainHero from './MainHero'
import Tvshows from './Tvshows'
import Movies from './Movies'
import List from './List/List'
import New from './New'
import Moviedetails from './Moviedetails'

import { Route,Routes } from 'react-router-dom'

export default function Home(){
    return(
        <div className="netflix-userhomepage-section position-relative">
            {/* Browse Page Header */}
            <LoginHeader/>
            <div  id='main position-relative'>
            <Moviedetails/>
            <Routes>
            {/* Browse Home Page */}
            <Route path='/' element={<MainHero/>}></Route>
            {/* Browse TV Shows */}
            <Route path='/tvshows'element={<Tvshows/>}/>
            {/* Browse Movies */}
            <Route path='/movies' element={<Movies/>}/>
            {/* Browse Users List */}
            <Route path='/list' element={<List/>}/>

            {/* Browse New */}
            <Route path='/new'element={<New/>}/>
            {/* Playvideo */}   
            </Routes>
            </div>
        </div>
    )
}