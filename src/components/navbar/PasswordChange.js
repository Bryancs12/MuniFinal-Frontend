import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { startPasswordChange } from '../actions/auth';

export const PasswordChange = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth)

    const initialValues = {
        contrasena: '',
        confirmContrasena: '',
    }

    const handlePasswordChange = (values) => {
         dispatch(startPasswordChange(
            uid,
            values.contrasena,
            values.confirmContrasena,
        ))

    }


    return (
        <>

            <Formik
                initialValues={initialValues}
                validate={(values) => {
                    let errores = {};

                    if (values.contrasena.length < 6) {
                        errores.contrasena = 'Las contrasenas debe de tener al menos 6 caracteres'
                    }

                    if (values.contrasena !== values.confirmContrasena) {
                        errores.confirmContrasena = 'Las contrasenas deben de coincidir'
                    } else if (values.confirmContrasena.length < 6) {
                        errores.confirmContrasena = 'Las contrasenas debe de tener al menos 6 caracteres'
                    }

                    return errores;
                }}

                onSubmit={(values, { resetForm }) => {
                    handlePasswordChange(values)
                    resetForm();
                    navigate('/')
                }}
            >
                {({ errors, touched }) => (

                    <Form className='flex justify-center grid italic bg-gray-200 pt-16'>

                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Cambio de contraseña</div>


                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label htmlFor='contrasena' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Contraseña Actual
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Confirmar actual"
                                        id="contrasena"
                                        type="password"
                                        name="contrasena" />
                                    {errors.contrasena && touched.contrasena ? (<div className='text-red-500 text-left'>{errors.contrasena}</div>) : null}
                                </div>

                            </div>


                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label htmlFor='confirmContrasena' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Confirmar Contraseña
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Confirmar contraseña"
                                        id="confirmContrasena"
                                        type="password"
                                        name="confirmContrasena" />
                                    {errors.confirmContrasena && touched.confirmContrasena ? (<div className='text-red-500 text-left'>{errors.confirmContrasena}</div>) : null}
                                </div>

                            </div>

                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate('/')}>Cancelar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>


        </>
    )
}
