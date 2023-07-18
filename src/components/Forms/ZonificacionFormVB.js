import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


export const ZonificacionFormVB = () => {

    const URI = `${process.env.REACT_APP_API_URL}api/zonificacionvb/new`
    const URIVB = `${process.env.REACT_APP_API_URL}api/vistoBueno/`
    const navigate = useNavigate();
    const { id } = useParams();

    const { uid, nombre } = useSelector(state => state.auth)
    const [vistoBueno, setVistoBueno] = useState({});

    const getTramiteById = async () => {
        const res = await axios.get(URIVB + id)
        setVistoBueno(res.data[0])
    }

    useEffect(() => {
        getTramiteById()
    }, [id])


    const initialValues = {
        idVistoBueno: id,
        zona: [''],
        area: [''],
        tipoRuta: "",
        zona6: "",
        afectadoHumedal: "",
        zmt: "",
    }


    return (
        <>
            <Formik
                initialValues={initialValues}

                validate={(values) => {
                    let errores = {};

                    if (!values.tipoRuta) {
                        errores.tipoRuta = 'Porfavor, ingrese un tipo de ruta'
                    }

                    if (!values.zona6) {
                        //console.log('Ingresa un nombre')
                        errores.zona6 = 'Porfavor, indica la zona 6'
                    }

                    if (!values.afectadoHumedal) {
                        errores.afectadoHumedal = 'Porfavor, indica un afectado humedal'
                    }

                    if (!values.zmt) {
                        errores.zmt = 'Porfavor, indica si tiene zmt'
                    }

                    if (!values.zona) {
                        errores.zona = 'Porfavor, indica si tiene zona'
                    }

                    if (!values.area) {
                        errores.area = 'Porfavor, indica si tiene area'
                    }
                    return errores;
                }}


                onSubmit={async (values) => {

                    const { zona, area } = values


                    await axios.post(URI, {
                        idVistoBueno: id,
                        creador: nombre,
                        idCreador: uid,
                        zona,
                        area,
                        ...values,
                        nombreSolicitante: vistoBueno.nombreSolicitante,
                        nombrePropietario: vistoBueno.nombrePropietario,
                        cedula: vistoBueno.cedula,
                        cedulaPropietario: vistoBueno.cedulaPropietario,
                        nombreProyecto: vistoBueno.nombreProyecto,
                        descripcionProyecto: vistoBueno.descripcionProyecto,
                        planoCatastro: vistoBueno.planoCatastro,
                        propiedadMatricula: vistoBueno.propiedadMatricula,
                        direccionInmueble: vistoBueno.direccionInmueble,
                        telefono: vistoBueno.telefono,
                        correoElectronico: vistoBueno.correoElectronico,
                        fax: vistoBueno.fax,
                    })

                    navigate('/zonificacionvb');
                }}

            >
                {({ errors, touched, values }) => (
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

                            <FieldArray
                                name="area"
                                render={arrayHelpers => (
                                    <div>
                                        {values.area.map((friend, index) => (
                                            <div key={index} className='-mx-3 md:flex mb-6'>
                                                <div className='md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 '>
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