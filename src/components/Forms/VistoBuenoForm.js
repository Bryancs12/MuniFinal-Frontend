
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';

export const VistoBuenoForm = () => {


    const [users, setUsers] = useState([]);
    const { nombre, uid } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const URIVistoBueno = `${process.env.REACT_APP_API_URL}api/vistoBueno/new`


    const URIUSERS = `${process.env.REACT_APP_API_URL}api/auth/zonificacionVBUsers`

    const getUsersList = async () => {
        const res = await axios.get(URIUSERS)
        setUsers(res.data)
    }
    useEffect(() => {
        getUsersList()
    }, [])

    const initialValues = {
        nombreSolicitante: '',
        nombrePropietario: '',
        zona: '',
        cedula: '',
        cedulaPropietario: '',
        nombreProyecto: '',
        descripcionProyecto: '',
        planoCatastro: '',
        propiedadMatricula: '',
        direccionInmueble: '',
        telefono: '',
        correoElectronico: '',
        fax: '',
        idUsuarioDestino: 0,
        creador: nombre,
        idCreador: uid,
    }

    return (
        <>
            <Formik

                initialValues={initialValues}

                validate={(values) => {
                    let errors = {};
                    if (!values.nombrePropietario) {
                        errors.nombrePropietario = 'Porfavor, ingrese un nombre de propietario'
                    }
                    if (!values.nombreSolicitante) {
                        errors.nombreSolicitante = 'Porfavor, ingrese un nombre de solicitante'
                    }
                    if (!values.cedulaPropietario) {
                        errors.cedulaPropietario = 'Porfavor, ingrese cedula de propietario'
                    } else if (!values.cedulaPropietario.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errors.cedulaPropietario = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.cedula) {
                        errors.cedula = 'Porfavor, ingrese un cedula'
                    } else if (!values.cedula.match(/^[1-9]{1}-0[0-9]{3}-0[0-9]{3}$/)) {
                        errors.cedula = 'Debe contener el formato correcto. Ejemplo: 7-0094-0078'
                    }
                    if (!values.planoCatastro) {
                        errors.planoCatastro = 'Porfavor, ingrese un plano catastro'
                    } else if (!values.planoCatastro.match(/^[0-9]{6,7}-[0-9]{4}$/)) {
                        errors.planoCatastro = 'Debe contener el formato correcto. Ejemplo: 1234567-2023'
                    }
                    if (!values.propiedadMatricula) {
                        errors.propiedadMatricula = 'Porfavor, ingrese una propiedad matricula'
                    } else if (!values.propiedadMatricula.match(/^[0-9]{6}-[0]{3}$/)) {
                        errors.propiedadMatricula = 'Debe contener el formato correcto. Ejemplo: 123456-000'
                    }
                    if (!values.nombreProyecto) {
                        errors.nombreProyecto = 'Porfavor, ingrese un nombre del proyecto'
                    }
                    if (!values.descripcionProyecto) {
                        errors.descripcionProyecto = 'Porfavor, ingrese la descripcion del proyecto'
                    }
                    if (!values.direccionInmueble) {
                        errors.direccionInmueble = 'Porfavor, ingrese la direccion Inmueble'
                    }
                    if (!values.telefono) {
                        errors.telefono = 'Porfavor, ingrese el telefono'
                    } else if (!/^[0-9]{4}-[0-9]{4}$/.test(values.telefono)) {
                        errors.telefono = 'Debe contener el formato correcto. Ejemplo: 2710-0000'
                    }
                    if (!values.correoElectronico) {
                        errors.correoElectronico = 'Porfavor, ingrese un correo electronico'
                    }
                    if (!values.fax) {
                        errors.fax = 'Porfavor, ingrese el # de fax'
                    }
                    if (!values.idUsuarioDestino) {
                        errors.idUsuarioDestino = 'Porfavor, seleccione a que usuario se le asginará el trámite'
                    }
                    return errors;
                }}

                onSubmit={async (values) => {
                    //await axios.post(URIVistoBueno, values)
                    const { idUsuarioDestino } = values;

                    await axios.post(URIVistoBueno, {
                        idUsuarioDestino: parseInt(idUsuarioDestino),
                        ...values
                    })
                    navigate('/vistoBueno');
                }}

            >
                {({ errors, touched }) => (


                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>

                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Visto Bueno</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='nombreSolicitante' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del solicitante
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del solicitante"
                                        id="nombreSolicitante"
                                        name="nombreSolicitante" />
                                    {errors.nombreSolicitante && touched.nombreSolicitante ? (<div className='text-red-500 text-left'>{errors.nombreSolicitante}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='nombrePropietario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del Propietario
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del propietario"
                                        id="nombrePropietario"
                                        name="nombrePropietario" />
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
                                    <label htmlFor='cedulaPropietario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Cédula del Propietario
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        placeholder="Cédula del propietario"
                                        id="cedulaPropietario"
                                        name="cedulaPropietario" />
                                    {errors.cedulaPropietario && touched.cedulaPropietario ? (<div className='text-red-500 text-left'>{errors.cedulaPropietario}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='nombreProyecto' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre del Proyecto
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre del Proyecto"
                                        id="nombreProyecto"
                                        name="nombreProyecto" />
                                    {errors.nombreProyecto && touched.nombreProyecto ? (<div className='text-red-500 text-left'>{errors.nombreProyecto}</div>) : null}

                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='descripcionProyecto' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Descripción proyecto
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Descripción del proyecto"
                                        id="descripcionProyecto"
                                        name="descripcionProyecto" />
                                    {errors.descripcionProyecto && touched.descripcionProyecto ? (<div className='text-red-500 text-left'>{errors.descripcionProyecto}</div>) : null}
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
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='propiedadMatricula' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Propiedad Matrícula
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Propiedad Matrícula"
                                        id="propiedadMatricula"
                                        name="propiedadMatricula" />
                                        {errors.propiedadMatricula && touched.propiedadMatricula ? (<div className='text-red-500 text-left'>{errors.propiedadMatricula}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='telefono' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Teléfono
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Teléfono"
                                        id="telefono"
                                        name="telefono" />
                                    {errors.telefono && touched.telefono ? (<div className='text-red-500 text-left'>{errors.telefono}</div>) : null}

                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='correoElectronico' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Correo Electrónico
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Correo Electrónico"
                                        id="correoElectronico"
                                        name="correoElectronico" />
                                    {errors.correoElectronico && touched.correoElectronico ? (<div className='text-red-500 text-left'>{errors.correoElectronico}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='fax' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Fax
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Fax"
                                        id="fax"
                                        name="fax" />
                                    {errors.fax && touched.fax ? (<div className='text-red-500 text-left'>{errors.fax}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='idUsuarioDestino' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Usuario de Destino
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
                                    <label htmlFor='direccionInmueble' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Dirección Inmueble
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Dirección Inmueble" 
                                    id="direccionInmueble"
                                    as="textarea"
                                    name="direccionInmueble"/>
                                    {errors.direccionInmueble && touched.direccionInmueble ? (<div className='text-red-500 text-left'>{errors.direccionInmueble}</div>) : null}
                                </div>
                            </div>
                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate('/vistoBueno')}>Cancelar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}