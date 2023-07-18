import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({children}) =>{
    let {token} = useSelector(state => state.auth)
 
    return token ? <Navigate to="/" /> : children

}