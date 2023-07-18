import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () =>{
    let {token} = useSelector(state => state.auth)
    //console.log(uid)
 
    return token ? <Outlet /> : <Navigate to="/login" />

}