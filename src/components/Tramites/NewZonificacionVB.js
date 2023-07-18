import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MaterialReactTable from 'material-react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import { ColumnsTable } from '../Table/ColumnsTable';

export const NewZonificacionVB = () => {

  const URI = `${process.env.REACT_APP_API_URL}api/vistoBueno/getState`

  const [vistoBueno, setVistoBueno] = useState([]);

  const datos = []
  const [columnsUsoSuelo,columnsVistoBueno, columnsZoni, columnsUsers, columnsZoniVB] = ColumnsTable();

  vistoBueno.map(e => {
    const object = {
        id: e.id,
        Nombre_SolicitanteVB: e.nombreSolicitante,
        Nombre_PropietarioVB: e.nombrePropietario,
        CedulaVB: e.cedula,
        Cedula_PropietarioVB: e.cedulaPropietario,
        Nombre_ProyectoVB: e.nombreProyecto,
        Descripcion_ProyectoVB: e.descripcionProyecto,
        Plano_CatastroVB: e.planoCatastro,
        Direccion_InmuebleVB: e.direccionInmueble,
        TelefonoVB: e.telefono,
        Correo_ElectronicoVB: e.correoElectronico,
        FaxVB: e.fax,
        FechaVB: e.fechaCreacion,
        EstadoVB: e.estado,
        creadorVB: e.creador,
        zonaVB: e.zona
    }
    datos.push(object)
  })


  useEffect(() => {
    getTramite()
  }, [])

  const getTramite = async () => {
    const res = await axios.get(URI)
    setVistoBueno(res.data)
  }


  return (
    <>
      <div className='text-4xl text-center pt-8 pb-8 underline'>
        Zonificaciones pendientes de Visto Bueno
      </div>
    
    {
      vistoBueno.length > 0 
      ?  
      <MaterialReactTable
            columns={columnsVistoBueno}
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
                    <Link to={`/zonificacionFormVB/${row.original.id}`}>
                      <FontAwesomeIcon icon={faSquarePlus}  className="fa-2xl"/>
                    </Link>
                  </Button>
                </Tooltip>
              </div>
            )}
          /> 
          : 
          <div className='text-4xl text-center h-80 grid content-center'>No hay visto buenos pendientes</div>
      }
     
     
    </>
  )
}