import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { startChecking } from '../components/actions/auth';
import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {

    const dispatch = useDispatch();
    const { cheking } = useSelector(state => state.auth)

   
    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    // console.log(cheking)
    if (cheking) {
        return <div>Espere...</div>
    }

    return (
        <div >
            <BrowserRouter>
                <Routes>
                    
                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                        } 
                    />

                    <Route element={<PrivateRoute />}>
                         <Route path="/*" element={<DashboardRoutes/>}/>  
                    </Route>

                
{/* 
                    <Route path='/*' element={
                    <PrivateRoute auth={!!uid}>
                        <DashboardRoutes />
                    </PrivateRoute>
                }> 
                        
                    </Route>   */}

                </Routes>
            </BrowserRouter>
        </div>
    )
}
