import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MaterialReactTable from 'material-react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';

export const NewZonificacion = () => {

  const {uid,roles} = useSelector(state => state.auth)
  const URI = roles.nombreRol ==="Administrador" ? `${process.env.REACT_APP_API_URL}api/usoSuelo/getState` : `${process.env.REACT_APP_API_URL}api/usoSuelo/filterByIdAssigned/${uid}`

  const [usoSuelo, setUsoSuelo] = useState([]);

  const datos = []
  const [columnsUsoSuelo] = ColumnsTable();

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
      zona: e.zona
    }
    datos.push(object)
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
      <div className='text-4xl text-center pt-8 pb-8 underline'>
        Zonificaciones pendientes de uso de Suelo
      </div>
    
    {
      usoSuelo.length > 0 
      ?  
      <MaterialReactTable
            columns={columnsUsoSuelo}
            data={datos}
            //enableRowSelection //enable some features
            enableColumnOrdering
            enableGlobalFilter={false} //turn off a feature

            initialState={{
              columnVisibility: {idUnidad : false},
              density: 'compact',
              pagination: {
                pageIndex : 0,
                pageSize : 5
              }
            }}

            displayColumnDefOptions={{ 'mrt-row-actions': { size: 25 } }} //change width of actions column to 300px
            enableRowActions
            renderRowActions={({ row }) => (
              <div>
                <Tooltip arrow placement='top' title={<h1 className='text-xl'>Agregar Zonificacion</h1>}>
                  <Button>
                    <Link to={`/zonificacionForm/${row.original.id}`}>
                      <FontAwesomeIcon icon={faSquarePlus}  className="fa-2xl"/>
                    </Link>
                  </Button>
                </Tooltip>
              </div>
            )}
          /> 
          : 
          <div className='text-4xl text-center h-80 grid content-center'>No hay usos de suelo pendientes</div>
      }
     
     
    </>
  )
}
