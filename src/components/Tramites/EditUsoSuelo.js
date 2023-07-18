
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

export const EditUsoSuelo = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/usoSuelo/`
    const navigate = useNavigate();
    const { id } = useParams();

    const [usoSuelo, setUsoSuelo] = useState({});

    const getTramiteById = async () => {
        const res = await axios.get(URI + id)
        setUsoSuelo(res.data[0])
    }
    useEffect(() => {
        getTramiteById()
    }, [id])


    return (
        <>
            <Formik
                initialValues={usoSuelo}
                enableReinitialize={true}
                validate={(values) => {
                    let errors = {};

                    if (!values.nombrePropetario) {
                        errors.nombrePropetario = 'Porfavor, ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombrePropetario)) {
                        errors.nombrePropetario = 'El nombre solo debe de contener letras y espacios'
                    }

                    if (!values.nombreSolicitante) {
                        errors.nombreSolicitante = 'Porfavor, ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreSolicitante)) {
                        errors.nombreSolicitante = 'El nombre solo debe de contener letras y espacios'
                    }

                    if (!values.distrito) {
                        errors.distrito = 'Porfavor, ingrese un distrito'
                    }
                    if (!values.tipoUsoSuelo) {
                        errors.tipoUsoSuelo = 'Porfavor, ingrese un tipo de uso de suelo'
                    }
                    if (!values.cedula) {
                        errors.cedula = 'Porfavor, ingrese un cedula'
                    } else if (!values.cedula.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errors.cedula = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.planoCatastro) {
                        errors.planoCatastro = 'Porfavor, ingrese un plano catastro'
                    } else if (!/^[0-9]{6,7}-[0-9]{4}$/.test(values.planoCatastro)) {
                        errors.planoCatastro = 'Debe contener el formato correcto. Ejemplo: 1234567-2023'
                    }
                    if (!values.propiedadMatricula) {
                        errors.propiedadMatricula = 'Porfavor, ingrese una propiedad matricula'
                    } else if (!values.propiedadMatricula.match(/^[0-9]{6}-[0]{3}$/)) {
                        errors.propiedadMatricula = 'Debe contener el formato correcto. Ejemplo: 123456-000'
                    }
                    if (!values.direccion) {
                        errors.direccion = 'Porfavor, ingrese una direccion'
                    }
                    return errors;
                }}
                onSubmit={async (values) => {

                    await axios.put(URI + id, values)

                    console.log(values);
                    console.log('enviado')
                    navigate('/usoSuelo');
                }}

            >
                {({ values, touched, errors }) => (
                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>

                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Uso de Suelo</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='nombreSolicitante' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del solicitante
                                    </label>
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del solicitante"
                                        id="nombreSolicitante"
                                        name="nombreSolicitante" />
                                    {errors.nombreSolicitante && touched.nombreSolicitante ? (<div className='text-red-500 text-left'>{errors.nombreSolicitante}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='nombrePropetario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del Propietario
                                    </label>
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del propietario"
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
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Cédula"
                                        id="cedula"
                                        name="cedula" />
                                    {errors.cedula && touched.cedula ? (<div className='text-red-500 text-left'>{errors.cedula}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='distrito' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Distrito
                                    </label>
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Distrito"
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
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Plano Catastro"
                                        id="planoCatastro"
                                        name="planoCatastro" />
                                    {errors.planoCatastro && touched.planoCatastro ? (<div className='text-red-500 text-left'>{errors.planoCatastro}</div>) : null}

                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='tipoUsoSuelo' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Tipo de Uso de Suelo
                                    </label>
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Tipo de Uso de Suelo"
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
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Propiedad Matrícula"
                                        id="propiedadMatricula"
                                        name="propiedadMatricula" />
                                    {errors.propiedadMatricula && touched.propiedadMatricula ? (<div className='text-red-500 text-left'>{errors.propiedadMatricula}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='propiedadMatricula' class="uppercase tracking-wide text-white text-xs mb-2">
                                        Usuario al que va dirigido
                                    </label>
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label htmlFor='direccion' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Dirección
                                    </label>
                                    <Field class="placeholder-gray-500 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Dirección"
                                        id="direccion"
                                        as="textarea"
                                        name="direccion" />
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
