import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import { Blog } from "../AllPages/Blog"


export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
    </Routes>
}