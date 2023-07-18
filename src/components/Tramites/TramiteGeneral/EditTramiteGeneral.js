import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';


export const EditTramiteGeneral = () => {

    let urlParam = useParams();
    let params = urlParam['*'].split("/");

    const URI = `${process.env.REACT_APP_API_URL}api/interfazTramite/`

    const navigate = useNavigate();

    console.log(params);

    const [tramiteGeneral, setTramiteGeneral] = useState({});

    const getTramiteById = async () => {
        const res = await axios.get(URI + params[3])
        setTramiteGeneral(res.data[0])
    }
    useEffect(() => {
        getTramiteById()
    }, [params[3]])


    return (
        <>
            <Formik

                initialValues={tramiteGeneral}
                enableReinitialize={true}
                validate={(values) => {
                    let errores = {};

                    if (!values.asunto) {
                        errores.asunto = 'Porfavor, ingrese un asunto'
                    }
                    if (!values.descripcion) {
                        errores.descripcion = 'Porfavor, ingrese una descripcion'
                    }
                    if (!values.nombreCompleto) {
                        errores.nombreCompleto = 'Porfavor, ingrese el nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreCompleto)) {
                        errores.nombreCompleto = 'El nombre solo debe de contener letras y espacios'
                    }
                    if (!values.cedula) {
                        errores.cedula = 'Porfavor, ingrese un cedula'
                    } else if (!values.cedula.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errores.cedula = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.direccion) {
                        errores.direccion = 'Porfavor, ingrese una direccion'
                    }


                    return errores;
                }}


                onSubmit={async (values) => {

                    await axios.put(URI + params[3], values)

                    console.log(values);
                    console.log('enviado')
                    navigate(`/${params[1]}/${params[2]}`);
                }}
            >
                {({ errors, touched }) => (
                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>

                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>{params[2]}</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='nombreCompleto' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre Completo
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre Completo"
                                        id="nombreCompleto"
                                        name="nombreCompleto" />
                                    {errors.nombreCompleto && touched.nombreCompleto ? (<div className='text-red-500 text-left'>{errors.nombreCompleto}</div>) : null}
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
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='asunto' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Asunto
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Asunto"
                                        id="asunto"
                                        name="asunto" />
                                    {errors.asunto && touched.asunto ? (<div className='text-red-500 text-left'>{errors.asunto}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='descripcion' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Descripción
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Descripción"
                                        id="descripcion"
                                        name="descripcion" />
                                    {errors.descripcion && touched.descripcion ? (<div className='text-red-500 text-left'>{errors.descripcion}</div>) : null}
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
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate(`/${params[1]}/${params[2]}`)}>Cancelar</button>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
