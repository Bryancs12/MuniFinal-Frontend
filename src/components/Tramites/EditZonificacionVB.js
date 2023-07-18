import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

export const EditZonificacionVB = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/zonificacionvb/`
    const navigate = useNavigate();
    const { id } = useParams();

    const [zonificacionvb, setZonificacionvb] = useState({});

    const getTramiteById = async () => {
        const res = await axios.get(URI + id)
        setZonificacionvb(res.data[0])
        console.log(res.data[0]);
    }
    useEffect(() => {
        getTramiteById()
    }, [id])

    const initialState = {
        idVistoBueno : zonificacionvb.idVistoBueno,
        tipoRuta : zonificacionvb.tipoRuta,
        zona6: zonificacionvb.zona6,
        afectadoHumedal: zonificacionvb.afectadoHumedal,
        zmt: zonificacionvb.zmt,
        nombreSolicitante: zonificacionvb.nombreSolicitante,
        nombrePropietario: zonificacionvb.nombrePropietario,
        cedula: zonificacionvb.cedula,
        cedulaPropietario: zonificacionvb.cedulaPropietario,
        nombreProyecto: zonificacionvb.nombreProyecto,
        descripcionProyecto: zonificacionvb.descripcionProyecto,
        planoCatastro: zonificacionvb.planoCatastro,
        propiedadMatricula: zonificacionvb.propiedadMatricula,
        telefono: zonificacionvb.telefono,
        correoElectronico: zonificacionvb.correoElectronico,
        fax: zonificacionvb.fax,
        direccionInmueble: zonificacionvb.direccionInmueble,
        zona: [''],
        area: [''],
    }
  

    return (
        <>
            <Formik
                initialValues={initialState}
                enableReinitialize={true}

                validate={(values) => {
                    let errors = {};

                    if (!values.tipoRuta) {
                        errors.tipoRuta = 'Porfavor, ingrese un tipo de ruta'
                    }

                    if (!values.zona6) {
                        //console.log('Ingresa un nombre')
                        errors.zona6 = 'Porfavor, indica la zona 6'
                    }

                    if (!values.afectadoHumedal) {
                        errors.afectadoHumedal = 'Porfavor, indica un afectado humedal'
                    }

                    if (!values.zmt) {
                        errors.zmt = 'Porfavor, indica si tiene zmt'
                    }

                    if (!values.zona) {
                        errors.zona = 'Porfavor, indica si tiene zona'
                    }

                    if (!values.area) {
                        errors.area = 'Porfavor, indica si tiene area'
                    }
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
                    } else if (!/^[0-9]{6,7}-[0-9]{4}$/.test(values.planoCatastro)) {
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
                    return errors;
                }}

                onSubmit={async (values) => {

                    await axios.put(URI + id, values)

                    navigate('/zonificacionvb');
                }}

            >
                {({ errors, touched, values}) => (
                    <Form className='bg-gray-200 min-h-screen flex items-start py-12 justify-center'>

                        <div class="shadow-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Zonificación de Visto Bueno</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='tipoRuta' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Tipo de Ruta
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Tipo de Ruta"
                                        id="tipoRuta"
                                        name="tipoRuta" />
                                    {errors.tipoRuta && touched.tipoRuta ? (<div className='text-red-500 text-left'>{errors.tipoRuta}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='zona6' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Zona 6
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        id="zona6"
                                        name="zona6"
                                        as="select">
                                        <option hidden>Selecciona una opcion</option>
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </Field>
                                    {errors.zona6 && touched.zona6 ? (<div className='text-red-500 text-left'>{errors.zona6}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='afectadoHumedal' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Afectado Humedal
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        id="afectadoHumedal"
                                        name="afectadoHumedal"
                                        as="select">
                                        <option hidden>Selecciona una opcion</option>
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </Field>
                                    {errors.afectadoHumedal && touched.afectadoHumedal ? (<div className='text-red-500 text-left'>{errors.afectadoHumedal}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='zmt' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        ZMT
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        id="zmt"
                                        name="zmt"
                                        as="select">
                                        <option hidden>Selecciona una opcion</option>
                                        <option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </Field>
                                    {errors.zmt && touched.zmt ? (<div className='text-red-500 text-left'>{errors.zmt}</div>) : null}
                                </div>
                            </div>

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
                                    {errors.nombrePropietario && touched.nombrePropietario ? (<div className='text-red-500 text-left'>{errors.nombrePropietario}</div>) : null}
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
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-full px-3">
                                    <label htmlFor='direccionInmueble' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Dirección Inmueble
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Dirección Inmueble"
                                        id="direccionInmueble"
                                        as="textarea"
                                        name="direccionInmueble" />
                                    {errors.direccionInmueble && touched.direccionInmueble ? (<div className='text-red-500 text-left'>{errors.direccionInmueble}</div>) : null}
                                </div>
                            </div>

                            <FieldArray
                                name="area"
                                render={arrayHelpers => (
                                    <div>
                                        { values.area && values.area.length > 0 &&
                                        values.area.map((friend, index) => (
                                            <div key={index} className='-mx-3 md:flex mb-6'>
                                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                                    <label>Zona</label>
                                                    <Field name={`zona[${index}]`} as="select" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                                                        <option>Selecciona una opcion</option>
                                                        <option value="ZRB">Zona Residencial Baja (ZRB)</option>
                                                        <option value="ZRM">Zona Residencial media (ZRM)</option>
                                                        <option value="ZRA">Zona Residencial Alta (ZRA)</option>
                                                        <option value="ZCR">Zona Comercio Residencial (ZCR)</option>
                                                        <option value="ZCC">Zona Comercio Central (ZCC)</option>
                                                        <option value="ZCL">Zona Comercio Local (ZCL)</option>
                                                        <option value="ZPI">Zona Publica Institucional (ZPI)</option>
                                                        <option value="ZH">Zona Hotelera (ZH)</option>
                                                        <option value="ZST">Zona Servicios Turísticos (ZST)</option>
                                                        <option value="ZI">Zona Industrial (ZI)</option>
                                                        <option value="ZP">Zona Portuaria (ZP)</option>
                                                        <option value="ZAP">Zona de Apoyo Portuario (ZAP)</option>
                                                        <option value="ZE">Zona Especial Decreto (ZE)</option>
                                                        <option value="ZR">Zona Recreativa (ZR)</option>
                                                        <option value="ZPF">Zona Protección Forestal (ZPF)</option>
                                                        <option value="FPR">Fuera del Plan Regulador (FPR)</option>
                                                    </Field>
                                                    {errors.zona && touched.zona ? (<div className='text-red-500 text-left'>{errors.zona}</div>) : null}
                                                </div>

                                                <div className='md:w-1/2 px-3'>
                                                    <label>Area</label>
                                                    <Field
                                                        type="text"
                                                        name={`area[${index}]`}
                                                        className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                                    />
                                                    {errors.area && touched.area ? (<div className='text-red-500 text-left'>{errors.area}</div>) : null}
                                                </div>
                                            </div>
                                        ))}

                                        <div className="flex md:justify-evenly flex-wrap gap-4">
                                            {
                                                values.area.length > 1
                                                    ?
                                                    <button className="py-2" type="button" onClick={() => arrayHelpers.pop()}>
                                                        <FontAwesomeIcon icon={faSquareMinus} className="fa-2xl" />
                                                    </button>
                                                    : null
                                            }

                                            <button type="button" className="py-2" onClick={() => arrayHelpers.push('')}>
                                                <FontAwesomeIcon icon={faSquarePlus} className="fa-2xl" />
                                            </button>
                                        </div>
                                    </div>
                                )}

                            />

                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate('/zonificacionvb')}>Cancelar</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}