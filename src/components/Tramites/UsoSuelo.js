import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MaterialTable } from '../Table/MaterialTable';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const UsoSuelo = () => {

  const {uid,roles} = useSelector(state => state.auth)
 
  //hacer operador ternario para no duplicar vistgas
  const URI = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/usoSuelo/` : `${process.env.REACT_APP_API_URL}api/usoSuelo/getByIdCreator/${uid}`;
  //const URIPDF = roles.nombreRol === "Administrador" || roles.nombreRol === "Jefatura" ? `http://localhost:3001/api/pdfAdjunto/findByTramite/` : '';
  

  //const URIAdmin = 'http://localhost:3001/api/usoSuelo/'

  const [usoSuelo, setUsoSuelo] = useState([]);

  const datos = []
  const [columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();

  usoSuelo.map(e => {
    const object = {
      id: e.id,
      idUnidad: e.idUnidad,
      Nombre_Solicitante: e.nombreSolicitante,
      Nombre_Propetario: e.nombrePropetario,
      Cedula: e.cedula,
      Distrito: e.distrito,
      Plano_Catastro: e.planoCatastro,
      Tipo_Uso_Suelo: e.tipoUsoSuelo,
      Propiedad_Matricula: e.propiedadMatricula,
      Fecha: e.createdAt,
      Estado: e.estado,
      creador: e.creador,
       //1st param, expresion regular que encuentra la "," al final del string
       zona: e.zona.replace(/,$/ , "")
    }
    datos?.push(object)
  })



  useEffect(() => {
    getTramite()
  }, [])

  const getTramite = async () => {
    const res = await axios.get(URI)
    setUsoSuelo(res.data)
  }

  return (
    <>

{

usoSuelo.length > 0 
    ?
    <MaterialTable 
    title={"Uso de suelo"}
    columnas={columnsUsoSuelo}
    data={datos}
    path={'usoSueloForm'}
    editButton={'editUsoSuelo'}
    pdf={'usoSueloPdf'}
    tipoTramite={'idUsoSuelo'}
    ubicacion={'/usoSuelo'}
    tramite={'usoSuelo'}
    />
    :
    <div className='text-4xl text-center pt-8 pb-8'>
     
        <p className='underline'>Uso de Suelo</p>
        <p className='pt-48 pb-20'>Aún no has creado ningún uso de suelo</p>
        <Link to='/usoSueloForm'>
        <button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800'title="Crear uso de suelo">
            <FontAwesomeIcon icon={faPlus} />
        </button>
        </Link>
    </div>
    }

    </>
  )
}
