import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from "./Home"
import Resources from "./Resources"
import Login from './Login'
import SignUp from './SignUp'
import SingleData from './SingleData'

function AllRoutes() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/resources" element={<Resources/>}/>
       <Route path="/login" element={<SignUp/>}/>
       <Route path='/signup' element={<Login/>}/>
       <Route path="/resources/:id" element={<SingleData/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
