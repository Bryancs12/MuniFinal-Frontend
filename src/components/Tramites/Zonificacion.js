import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MaterialTable } from '../Table/MaterialTable';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



export const Zonificacion = () => {

  const { uid, roles } = useSelector(state => state.auth)
  const URIZoni = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/zonificacion/` : `${process.env.REACT_APP_API_URL}api/zonificacion/getZonificacionByIdCreator/${uid}`

  const [zonificacion, setZonificacion] = useState([]);
  //por alguna razon si no llamo a todos no me renderiza bien y me llama a las columns de uso de suelo
  // y solo pasa cuando no pongo a los anteriores
  const [columnsUsoSuelo, columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();
  const datos = [];

  zonificacion.map(e => {
    if (e.idUsoSuelo == null) {

    } else {
      const object = {
        id: e.id,
        idUnidad: e.idUnidad,
        Nombre_Solicitante: e.nombreSolicitante,
        Nombre_Propetario: e.nombrePropietario,
        Cedula: e.cedula,
        Distrito: e.distrito,
        Plano_Catastro: e.planoCatastro,
        Tipo_Uso_Suelo: e.tipoUsoSuelo,
        Propiedad_Matricula: e.propiedadMatricula,
        Fecha: e.createdAt,
        plano: e.planoCatastro,
        zona: e.zona,
        area: e.area,
        tipoRuta: e.tipoRuta,
        zona6: e.zona6,
        afectadoHumedal: e.afectadoHumedal,
        zmt: e.zmt,
        creador: e.creador,
      }
      datos.push(object)
    }
  })

  const getData = async () => {
    const resZ = await axios.get(URIZoni)
    setZonificacion(resZ.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {zonificacion.length > 0
        ?
        <MaterialTable
          title={"Zonificaciones de Uso de Suelo"}
          columnas={columnsZoni}
          data={datos}
          sizeC={175}
          editButton={'editZonificacion'}
          pdf={'zonificacionPdf'}
          path={"newZonificacion"}
          tipoTramite={"idZonificacion"}
          ubicacion={'/zonificacion'}
          tramite={'zonificacion'}
        />
        :
        <div className='text-4xl text-center pt-8 pb-8'>

          <p className='underline'>Zonificaciones de Uso de Suelo</p>
          <p className='pt-48 pb-20'>Aún no has creado ninguna zonificación</p>
          <Link to='/newZonificacion'>
            <button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800' title="Crear zonificación">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
        </div>
      }

    </>
  )
}
