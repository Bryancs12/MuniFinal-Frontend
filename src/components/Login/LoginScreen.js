import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { startLogin } from '../actions/auth';
import LogoLogin from '../../assets/login.png';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [showPwd, setShowPwd] = useState(false)

    return (
        <>


            {/* Formulario login    */}
            <Formik
                initialValues={{
                    nombreUsuario: '',
                    contrasena: '',
                }}

                onSubmit={(values) => {

                    dispatch(startLogin(values.nombreUsuario, values.contrasena))

                }}
            >
                {() => (
                    <Form class="bg-gray-50 min-h-screen flex items-center justify-center">
                        <div class="bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                            <div class="md:w-1/2 px-8 md:px-16">
                                <h2 class="font-bold text-2xl text-[#002D74]">Inicio de sesión</h2>
                                <p class="text-xs mt-4 text-[#002D74]">Sistema de Gestión de trámites</p>

                                <div class="flex flex-col gap-4">
                                    <Field class="p-2 mt-8 rounded-xl border" type="text" name="nombreUsuario" placeholder="Nombre de usuario" />

                                    <div class="relative">

                                        <Field class="p-2 rounded-xl border w-full" id='contrasena' name="contrasena" placeholder="Contraseña" type={showPwd ? "text" : "password"} />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={() => setShowPwd(!showPwd)}>
                                            {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                            </svg>}
                                        </div>

                                    </div>

                                    <button type="submit" class="bg-[#3b5998] rounded-xl text-white py-2 hover:scale-105 duration-300">Iniciar Sesión</button>
                                </div>

                                <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                                    <hr class="border-gray-400" />
                                    <p class="text-center text-sm">O</p>
                                    <hr class="border-gray-400" />
                                </div>
                            </div>
                            <div class="md:block hidden w-1/2">
                                <img class="rounded-2xl" src={LogoLogin} />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
