import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import { Blog } from "../AllPages/Blog"
import { Home } from "../AllPages/Home"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<PrivateRoute><Blog/></PrivateRoute>}/>
    </Routes>
}