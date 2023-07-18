import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { startRegister } from '../actions/auth';

export const RegisterScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const initialValues = {
        nombre: '',
        apellidos: '',    
        nombreUsuario: '',
        gradoUsuario: '',
        contrasena: 'Muni@9876!!',
        confirmContrasena: '',
        roleId: 0,
        tipoUnidad: '',
    }

    const handleRegister = (values) =>{
        dispatch(startRegister(
            values.nombre,
            values.apellidos,
            values.nombreUsuario,
            values.gradoUsuario,
            values.tipoUnidad,
            values.contrasena,
            parseInt(values.roleId)
        ))
    }

    const handleUserRole = (values) => {
        return (
            values === "Unidad Técnica" ?
            
            <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                    <option hidden>Selecciona una opcion</option>
                    <option value="2">Jefatura</option>
                    <option value="3">Uso suelo</option>
                    <option value="5">Visto bueno</option>
                    <option value="6">Denuncias</option>
                    <option value="35">Otros</option>
                </Field>

                : values === "Ingeniería" ?
                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                        <option hidden>Selecciona una opcion</option>
                        <option value="2">Jefatura</option>
                        <option value="4">Zonificacion Uso suelo</option>
                        <option value="8">Zonificacion Visto bueno</option>
                        <option value="10">Denuncias</option>
                        <option value="7">Gestión Interna</option>    
                        <option value="33">Inspecciones</option> 
                        <option value="36">Otros</option>
                    </Field>

                    : values === "Catastro" ?
                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                        <option hidden>Selecciona una opcion</option>
                        {/* <option value="2">Jefatura</option> */}
                        <option value="11">Visados</option>
                        <option value="12">Alineamiento</option>
                        <option value="13">Denuncias</option>
                        <option value="14">Correcion de Cobro de Basuras</option>   
                        <option value="15">Otros</option>     
                    </Field>

                    : values === "Bienes Inmuebles" ?
                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                    <option hidden>Selecciona una opcion</option>
                    {/* <option value="2">Jefatura</option> */}
                    <option value="16">Exoneraciones</option>
                    <option value="17">Declaraciones de Bienes Inmuebles</option>
                    <option value="18">Certificaciones de Valor</option>
                    <option value="19">Consulta de Valores de Terrenos</option>   
                    <option value="20">Avaluos</option>   
                    <option value="21">Correcion de Impuestos</option>   
                    <option value="22">Otros</option>   
                </Field>

                : values === "Gestion Ambiental" ?
                <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                    <option hidden>Selecciona una opcion</option>
                    {/* <option value="2">Jefatura</option> */}
                    <option value="31">Denuncias</option>
                    <option value="32">Gestiones Plan GIRS</option> 
                    <option value="34">Otros</option>     
                </Field>

                : values === "Zona Maritimo Terrestre" ?
                <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
                <option hidden>Selecciona una opcion</option>
                {/* <option value="2">Jefatura</option> */}
                <option value="23">Solicitud de Consecion</option>
                <option value="24">Consulta Plan Regulador Costero</option>
                <option value="25">Denuncias</option>
                <option value="26">Otros</option>     
            </Field>

            : values === "Gestión de Ingeniería" ?
            <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            as="select" 
            id="roleId"
            name="roleId"
            >
            <option hidden>Selecciona una opcion</option>
            {/* <option value="2">Jefatura</option> */}
            <option value="27">Denuncias</option>
            <option value="28">Criterio Legal Unidades</option>
            <option value="29">Seguimiento de Consultas</option>
            <option value="30">Otros</option>     
        </Field>

        : 
        <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" as="select">
        <option hidden>Selecciona una opcion</option>
        <option disabled>Selecciona la unidad del usuario</option>
        </Field>

        )
    }

  
  return (
    <> 
        {/* Formulario Register    */}
        <div className='pt-20'>
            <Formik 
        initialValues={initialValues}
        validate={(values) =>{
            let errores = {};

            if(!values.nombre){
                //console.log('Ingresa un nombre')
                errores.nombre = 'Porfavor, ingresa un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                errores.nombre = 'El nombre solo debe de contener letras y espacios'
            }

            if(!values.apellidos){
                //console.log('Ingresa un nombre')
                errores.apellidos = 'Porfavor, ingresa los apellidos'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                errores.apellidos = 'Los apellidos solo deben de contener letras y espacios'
            }
    
            if(!values.nombreUsuario){
                errores.nombreUsuario = 'Porfavor, ingresa un nombre de usuario'
            } 

            if(!values.gradoUsuario){
                errores.gradoUsuario = 'Porfavor, selecciona el grado del usuario'
            } 

            if(!values.tipoUnidad){
                errores.tipoUnidad = 'Porfavor, selecciona la unidad del usuario'
            } 

            if(!values.roleId){
                errores.roleId = 'Porfavor, selecciona un rol para el usuario'
            }

            return errores;
        }}

        onSubmit={(values, {resetForm}) =>{
            handleRegister(values)
            resetForm();                              
        }}
            >
        {({errors, touched, values})=>(

      <Form className='flex justify-center grid italic bg-gray-200 pt-16'>
                        
                        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                            <div className='text-3xl mb-6 text-center'>Registro de usuario</div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative z-0 ">
                                    <label htmlFor='nombre' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Nombre 
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre "
                                        id="nombre"
                                        name="nombre" />
                                        {errors.nombre && touched.nombre ? (<div className='text-red-500 text-left'>{errors.nombre}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='apellidos' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                        Apellidos
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Apellidos"
                                        id="apellidos"
                                        name="apellidos" />
                                        {errors.apellidos && touched.apellidos ? (<div className='text-red-500 text-left'>{errors.apellidos}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label htmlFor='nombreUsuario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Nombre de usuario
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" placeholder="Nombre de usuario"
                                        id="nombreUsuario"
                                        name="nombreUsuario" />
                                        {errors.nombreUsuario && touched.nombreUsuario ? (<div className='text-red-500 text-left'>{errors.nombreUsuario}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='gradoUsuario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Grado del usuario
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        as="select"
                                        id="gradoUsuario"
                                        name="gradoUsuario">
                                        <option hidden>Selecciona una opcion</option>               
                                        <option value="Ingeniero">Ingeniero</option>
                                        <option value="Técnico">Técnico</option>
                                        <option value="Master">Master</option>
                                    </Field>
                                    {errors.gradoUsuario && touched.gradoUsuario ? (<div className='text-red-500 text-left'>{errors.gradoUsuario}</div>) : null}
                                </div>
                            </div>

                            <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3">
                                    <label htmlFor='gradoUsuario' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Tipo de Unidad
                                    </label>
                                    <Field class="placeholder-gray-400 placeholder-opacity-50 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text"
                                        as="select"
                                        id="tipoUnidad"
                                        name="tipoUnidad">
                                        <option hidden>Selecciona una opcion</option>               
                                        <option value="Unidad Técnica">Unidad Técnica</option>
                                        <option value="Ingeniería">Ingeniería</option>
                                        <option value="Catastro">Catastro</option>
                                        <option value="Bienes Inmuebles">Bienes Inmuebles</option>
                                        <option value="Gestion Ambiental">Gestion Ambiental</option>
                                        <option value="Zona Maritimo Terrestre">Zona Maritimo Terrestre</option>
                                        <option value="Gestión de Ingeniería">Gestión de Ingeniería</option>
                                    </Field>
                                    {errors.tipoUnidad && touched.tipoUnidad ? (<div className='text-red-500 text-left'>{errors.tipoUnidad}</div>) : null}
                                </div>
                                <div class="md:w-1/2 px-3">
                                    <label htmlFor='roleId' class="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                    Rol del usuario
                                    </label>
                                    {
                                        handleUserRole(values.tipoUnidad)
                                    }
                                    
                                    {errors.tipoUnidad && touched.tipoUnidad ? (<div className='text-red-500 text-left'>{errors.tipoUnidad}</div>) : null}
                                </div>
                            </div>

                            <div className="flex md:justify-evenly flex-wrap gap-4">
                                <button type="submit" className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-blue-500 text-white font-bold sm:w-32'>Enviar</button>
                                <button className='md:col-span-1 flex-grow md:w-8 mb-5 py-3 px-6 bg-red-500 text-white font-bold sm:w-32' onClick={() => navigate('/users')}>Cancelar</button>
                            </div>
                        </div>
                    </Form>
        )}
        </Formik>
            </div> 
       
    </>
  )
}
