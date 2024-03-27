import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Splashpage from '../Component/SplashScreen'
import Quiz from '../Component/Quiz'
function RouteCompo() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Splashpage></Splashpage>}></Route>
                <Route path='/quiz' element={<Quiz></Quiz>}></Route>
            </Routes>

        </div>
    )
}

export default RouteCompo
