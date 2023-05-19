import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import { Blog } from "../AllPages/Blog"
import { Home } from "../AllPages/Home"


export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
    </Routes>
}