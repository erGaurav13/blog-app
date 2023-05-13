import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"


export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/login" element={<Login/>}/>
    </Routes>
}