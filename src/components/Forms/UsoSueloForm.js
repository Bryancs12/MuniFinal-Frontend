import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';


export const UsoSueloForm = () => {

    const [users, setUsers] = useState([]);
    const { nombre, uid } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const URI = `${process.env.REACT_APP_API_URL}api/usoSuelo/new`
    const URIUSERS = `${process.env.REACT_APP_API_URL}api/auth/zonificacionUsers`


    //console.log({users})
    const getUsersList = async () => {
        const res = await axios.get(URIUSERS)
        setUsers(res.data)
    }
    useEffect(() => {
        getUsersList()
    }, [])

    const initialValues = {
        nombreSolicitante: '',
        nombrePropetario: '',
        zona: '',
        cedula: '',
        distrito: '',
        direccion: '',
        planoCatastro: '',
        tipoUsoSuelo: '',
        propiedadMatricula: '',
        idUsuarioDestino: 0,
        creador: nombre,
        idCreador: uid,

    }

    return (
        <>
            <Formik

                initialValues={initialValues}



                validate={(values) => {
                    let errores = {};
                    if (!values.nombrePropetario) {
                        errores.nombrePropetario = 'Porfavor, ingrese un nombre de propietario'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombrePropetario)) {
                        errores.nombrePropetario = 'El nombre solo debe de contener letras y espacios'
                    }

                    if (!values.nombreSolicitante) {
                        errores.nombreSolicitante = 'Porfavor, ingrese un nombre de solicitante'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreSolicitante)) {
                        errores.nombreSolicitante = 'El nombre solo debe de contener letras y espacios'
                    }

                    if (!values.distrito) {
                        errores.distrito = 'Porfavor, ingrese un distrito'
                    }
                    if (!values.tipoUsoSuelo) {
                        errores.tipoUsoSuelo = 'Porfavor, ingrese un tipo de uso de suelo'
                    }
                    if (!values.cedula) {
                        errores.cedula = 'Porfavor, ingrese un cedula'
                    } else if (!values.cedula.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errores.cedula = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.planoCatastro) {
                        errores.planoCatastro = 'Porfavor, ingrese un plano catastro'
                    } else if (!/^[0-9]{6,7}-[0-9]{4}$/.test(values.planoCatastro)) {
                        errores.planoCatastro = 'Debe contener el formato correcto. Ejemplo: 1234567-2023'
                    }
                    if (!values.propiedadMatricula) {
                        errores.propiedadMatricula = 'Porfavor, ingrese una propiedad matricula'
                    } else if (!values.propiedadMatricula.match(/^[0-9]{6}-[0]{3}$/)) {
                        errores.propiedadMatricula = 'Debe contener el formato correcto. Ejemplo: 123456-000'
                    }
                    if (!values.direccion) {
                        errores.direccion = 'Porfavor, ingrese una direccion'
                    }
                    if (!values.idUsuarioDestino) {
                        errores.idUsuarioDestino = 'Porfavor, seleccione a que usuario se le asginará el trámite'
                    }
                    return errores;
                }}

                onSubmit={async (values) => {

                    const { idUsuarioDestino } = values;

                    await axios.post(URI, {
                        idUsuarioDestino: parseInt(idUsuarioDestino),
                        ...values
                    })

                    navigate('/usoSuelo');
                }}

            >
                {({ errors, touched }) => (

                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>
                        
                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Uso de Suelo</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='nombreSolicitante' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del solicitante
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del solicitante"
                                        id="nombreSolicitante"
                                        name="nombreSolicitante" />
                                        {errors.nombreSolicitante && touched.nombreSolicitante ? (<div className='text-red-500 text-left'>{errors.nombreSolicitante}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='nombrePropetario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del Propietario
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del propietario"
                                        id="nombrePropetario"
                                        name="nombrePropetario" />
                                        {errors.nombrePropetario && touched.nombrePropetario ? (<div className='text-red-500 text-left'>{errors.nombrePropetario}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='cedula' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Cédula
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Cédula"
                                        id="cedula"
                                        name="cedula" />
                                        {errors.cedula && touched.cedula ? (<div className='text-red-500 text-left'>{errors.cedula}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='distrito' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Distrito
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Distrito"
                                        id="distrito"
                                        name="distrito" />
                                        {errors.distrito && touched.distrito ? (<div className='text-red-500 text-left'>{errors.distrito}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='planoCatastro' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Plano Catastro
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Plano Catastro"
                                        id="planoCatastro"
                                        name="planoCatastro" />
                                        {errors.planoCatastro && touched.planoCatastro ? (<div className='text-red-500 text-left'>{errors.planoCatastro}</div>) : null}
                                        
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='tipoUsoSuelo' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Tipo de Uso de Suelo
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Tipo de Uso de Suelo"
                                        id="tipoUsoSuelo"
                                        name="tipoUsoSuelo" />
                                        {errors.tipoUsoSuelo && touched.tipoUsoSuelo ? (<div className='text-red-500 text-left'>{errors.tipoUsoSuelo}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='propiedadMatricula' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Propiedad Matrícula
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Propiedad Matrícula"
                                        id="propiedadMatricula"
                                        name="propiedadMatricula" />
                                        {errors.propiedadMatricula && touched.propiedadMatricula ? (<div className='text-red-500 text-left'>{errors.propiedadMatricula}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='idUsuarioDestino' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Usuario de destino
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        as="select"
                                        id="idUsuarioDestino"
                                        name="idUsuarioDestino">
                                        <option hidden>Selecciona una opcion</option>

                                        {
                                            users?.map((u) => {
                                                //console.log(u.id)
                                                return (
                                                    <option key={u.id} value={u.id}>
                                                        {u.nombre} {u.apellidos}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Field>
                                    {errors.idUsuarioDestino && touched.idUsuarioDestino ? (<div className='text-red-500 text-left'>{errors.idUsuarioDestino}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label htmlFor='direccion' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Dirección
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Dirección" 
                                    id="direccion"
                                    as="textarea"
                                    name="direccion"/>
                                    {errors.direccion && touched.direccion ? (<div className='text-red-500 text-left'>{errors.direccion}</div>) : null}
                                </div>
                            </div>
                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate('/usoSuelo')}>Cancelar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
