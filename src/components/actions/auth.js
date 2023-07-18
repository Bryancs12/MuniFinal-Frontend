import {getData, postData } from "../helpers/FetchData"
import { types } from "../types/types"
import Swal from 'sweetalert2'



export const resetPassword = (nombreUsuario) => async dispatch => {

    try {
        await postData("api/auth/resetPassword", { nombreUsuario })
        //console.log(resp.data)
        // if (resp.data) {
        //     localStorage.setItem('token', resp.data.token)
    
        //     dispatch(login({
        //         uid: resp.data.uid,
        //         nombre: resp.data.nombre,
        //         token: resp.data.token,
        //         userRole: resp.data.userRole
        //     })) 
            
        // }
    } catch (error) {
        if(error.response){

            Swal.fire('Error', error.response.data.msg, 'error')
        
        } else if(error.request){
            console.log(error.request)
        } else{
            console.log('Error', error.message)
        }
    }      
}


export const startPasswordChange = async(id, nuevaContrasena, confirmarContrasena) =>{
    try {
        const resp = await postData("api/auth/changePassword", {id, nuevaContrasena, confirmarContrasena})
        console.log(resp)
        if(resp.data){
            Swal.fire('OK','Se ha realizado el cambio de contrasena!', 'success')
    
        }
      
    } catch (error) {
        if(error.response){

            //mensajes de errores
            
                //console.log(error.response)
                const errorMsg = error.response.data.msg
                Swal.fire('Error', errorMsg, 'error')
               

            //console.log(error.response.headers);
        } else if(error.request){
            console.log(error.request)
        } else{
            console.log('Error', error.message)
        }
    }
}

export const startLogin = (nombreUsuario, contrasena) => async dispatch => {

        try {
            const resp = await postData("api/auth/login", { nombreUsuario, contrasena })
            //console.log(resp.data)
            if (resp.data) {
                localStorage.setItem('token', resp.data.token)
        
                dispatch(login({
                    uid: resp?.data?.uid,
                    nombre: resp?.data?.nombre,
                    apellidos: resp?.data?.apellidos,
                    gradoUsuario: resp?.data?.gradoUsuario,
                    tipoUnidad: resp?.data?.tipoUnidad,
                    token: resp?.data?.token,
                    userRole: resp?.data?.userRole,
                    roles: resp?.data?.roles[0]?.role
                })) 
                
            }
        } catch (error) {
            if(error.response){

                if(error.response.status === 404){
                    // console.log(error.response.status)
                    // console.log(error.response)
                    const notFoundError = error.response.data.msg
                    Swal.fire({
                        title: notFoundError,
                         icon: 'error', 
                      
                         timer: 3000, 
                         timerProgressBar: true
                        })
                } else if(error.response.status === 400){
                     //console.log(error.response.data.errores.contrasena.msg)
                    const badRequestError = error.response.data.errores.contrasena.msg
                    Swal.fire({
                        title: badRequestError,
                         icon: 'error', 
                     
                         timer: 3000, 
                         timerProgressBar: true
                        })
                }

            } else if(error.request){
                console.log(error.request)
            } else{
                console.log('Error', error.message)
            }
        }      
}

export const startRegister = (nombre, apellidos, nombreUsuario, gradoUsuario, tipoUnidad, contrasena, roleId) => async dispatch => {

    try {
        const resp = await postData("api/auth/register", { nombre, apellidos, nombreUsuario, gradoUsuario, tipoUnidad, contrasena, roleId })
        console.log(resp)
        if(resp.data.ok = true){
            Swal.fire('OK','Se ha registrado el usuario!', 'success')
        }
      
    } catch (error) {
        if(error.response){

            //mensajes de errores
            
                //console.log(error.response)
                const errorMsg = error.response.data.msg
                Swal.fire('Error', errorMsg, 'error')
               

            //console.log(error.response.headers);
        } else if(error.request){
            console.log(error.request)
        } else{
            console.log('Error', error.message)
        }
    }      
}

export const startChecking = () => async dispatch => {

    try {
    const resp = await getData("api/auth/renew")

    if (resp.data) {
        localStorage.setItem('token', resp?.data?.token)
       //console.log(resp.data)
        dispatch(login({
            uid: resp?.data?.data?.uid,
            nombre: resp?.data?.data?.name,
            apellidos: resp.data?.data?.apellidos,
            gradoUsuario: resp?.data.data.gradoUsuario,
            tipoUnidad: resp?.data?.data?.tipoUnidad,
            token: resp?.data?.token, 
            userRole: resp?.data?.data?.role,
            roles: resp?.data?.data?.roles[0]?.role
        })) 
    } else{
     
    }
    } catch (error) {
        if(error.response){
            dispatch(checkingFinish())
        console.log(error.response.data);
        console.log(error.response.headers);

      } else if(error.request){
          console.log(error.request)
      } else{
          console.log('Error', error.message)
      }
    }
 
}

const checkingFinish = () =>{
    return {
        type: types.authChekingFinish
    }
}

const login = (user) => {
    return {
        type: types.authLogin,
        payload: user
    }
}

export const startLogout = () => async dispatch =>{
    localStorage.clear();
    dispatch(logout())
}

const logout = () =>{
    return{
        type: types.authLogout
    }
}