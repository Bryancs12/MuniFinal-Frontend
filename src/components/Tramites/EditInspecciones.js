
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

export const EditInspecciones = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/inspecciones/`
    const navigate = useNavigate();
    const { id } = useParams();

    const [inspecciones, setInspecciones] = useState({});

    const getTramiteById = async () => {
        const res = await axios.get(URI + id)
        setInspecciones(res.data[0])
    }
    useEffect(() => {
        getTramiteById()
    }, [id])

    return (
        <>
            <Formik
                initialValues={inspecciones}
                enableReinitialize={true}
                validate={(values) => {
                    let errores = {};

                    if (!values.nombre) {
                        errores.nombre = 'Porfavor, ingrese el nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                        errores.nombre = 'El nombre solo debe de contener letras y espacios'
                    }
                    if (!values.asunto) {
                        errores.asunto = 'Porfavor, ingrese un asunto'
                    }
                    if (!values.observacion) {
                        errores.observacion = 'Porfavor, ingrese una observación'
                    }
                    if (!values.cedula) {
                        errores.cedula = 'Porfavor, ingrese un cedula'
                    } else if (!values.cedula.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errores.cedula = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.direccion) {
                        errores.direccion = 'Porfavor, ingrese una direccion'
                    }
                    if (!values.coordenadas) {
                        errores.coordenadas = 'Porfavor, ingrese una coordenadas'
                    } else if (!values.coordenadas.match(/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/)) {
                        errores.coordenadas = 'Debe contener el formato correcto (positivos, negativos o ambos). Ejemplo: -19.4326,99.1332'
                    }
                    if (!values.email) {
                        errores.email = 'Porfavor, ingrese un correo electrónico'
                    }
                    if (!values.telefono) {
                        errores.telefono = 'Porfavor, ingrese el telefono'
                    } else if (!/^[0-9]{4}-[0-9]{4}$/.test(values.telefono)) {
                        errores.telefono = 'Debe contener el formato correcto. Ejemplo: 2710-0000'
                    }
                    return errores;
                }}
                onSubmit={async (values) => {

                    await axios.put(URI + id, values)

                    console.log(values);
                    console.log('enviado')
                    Swal.fire({ title: 'Usuario editado con éxito!', icon: 'success', timer: 3000, timerProgressBar: true })
                    navigate('/inspecciones');
                }}

            >
                {({ values, touched, errors }) => (
                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>

                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Inspecciones</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='nombre' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre Completo
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre"
                                        id="nombre"
                                        name="nombre" />
                                    {errors.nombre && touched.nombre ? (<div className='text-red-500 text-left'>{errors.nombre}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='asunto' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Asunto
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Asunto"
                                        id="asunto"
                                        name="asunto" />
                                    {errors.asunto && touched.asunto ? (<div className='text-red-500 text-left'>{errors.asunto}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='observacion' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Observación
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Observación"
                                        id="observacion"
                                        name="observacion" />
                                    {errors.observacion && touched.observacion ? (<div className='text-red-500 text-left'>{errors.observacion}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='cedula' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Cédula
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Cédula"
                                        id="cedula"
                                        name="cedula" />
                                    {errors.cedula && touched.cedula ? (<div className='text-red-500 text-left'>{errors.cedula}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='coordenadas' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Coordenadas
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Coordenadas"
                                        id="coordenadas"
                                        name="coordenadas" />
                                    {errors.coordenadas && touched.coordenadas ? (<div className='text-red-500 text-left'>{errors.coordenadas}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='email' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Email"
                                        id="email"
                                        name="email" />
                                    {errors.email && touched.email ? (<div className='text-red-500 text-left'>{errors.email}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='telefono' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Teléfono
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Teléfono"
                                        id="telefono"
                                        name="telefono" />
                                    {errors.telefono && touched.telefono ? (<div className='text-red-500 text-left'>{errors.telefono}</div>) : null}
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
                                        name="direccion" />
                                    {errors.direccion && touched.direccion ? (<div className='text-red-500 text-left'>{errors.direccion}</div>) : null}
                                </div>
                            </div>

                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate(`/inspecciones`)}>Cancelar</button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}