import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MaterialTable } from '../Table/MaterialTable';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Inspecciones = () => {

  const {uid,roles} = useSelector(state => state.auth)
 
  //hacer operador ternario para no duplicar vistgas
  const URI = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/inspecciones/` : `${process.env.REACT_APP_API_URL}api/inspecciones/getByIdCreator/${uid}`;

  const [inspecciones, setInspecciones] = useState([]);

  const datos = []
  const [columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();

  inspecciones.map(e => {
    const object = {
      id: e.id,
      nombre: e.nombre,
      Nombre_Propetario: e.nombrePropetario,
      asunto: e.asunto,
      observacion: e.observacion,
      cedula: e.cedula,
      direccion: e.direccion,
      coordenadas: e.coordenadas,
      correo: e.email,
      telefono: e.telefono,
      creador: e.creador,
    }
    datos?.push(object)
  })



  useEffect(() => {
    getTramite()
  }, [])

  const getTramite = async () => {
    const res = await axios.get(URI)
    setInspecciones(res.data)
  }

  return (
    <>

{

inspecciones.length > 0 
    ?
    <MaterialTable 
    title={"Inspecciones"}
    columnas={columnsInterfazInspecciones}
    data={datos}
    path={'inspeccionesForm'}
    editButton={'editInspecciones'}
    tipoTramite={'idInspecciones'}
    ubicacion={'/inspecciones'}
    tramite={'inspecciones'}
    />
    :
    <div className='text-4xl text-center pt-8 pb-8'>
     
        <p className=''>Inspecciones</p>
        <p className='pt-48 pb-20'>Aún no has creado ninguna Inspección</p>
        <Link to='/inspeccionesForm'>
        <button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800'title="Crear uso de suelo">
            <FontAwesomeIcon icon={faPlus} />
        </button>
        </Link>
    </div>
    }

    </>
  )
}
