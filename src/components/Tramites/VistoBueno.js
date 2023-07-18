import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MaterialTable } from '../Table/MaterialTable';
import { ColumnsTable } from '../Table/ColumnsTable';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const VistoBueno = () => {

  const { uid, roles } = useSelector(state => state.auth)
  const URIVB = roles.nombreRol === "Administrador" ? `${process.env.REACT_APP_API_URL}api/vistoBueno/` : `${process.env.REACT_APP_API_URL}api/vistoBueno/getByIdCreator/${uid}`;

  const [vistoBueno, setVistoBueno] = useState([]);

  const datos = []
  const [columnsUsoSuelo, columnsVistoBueno, columnsZoni, columnsUser, columnsZoniVB, columnsInterfazTramites, columnsInterfazInspecciones] = ColumnsTable();

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
      Propiedad_MatriculaVB: e.propiedadMatricula,
      creadorVB: e.creador,
      zona: e.zona.replace(/,$/, "")
    }
    datos.push(object)
  })


  useEffect(() => {
    getTramite()
  }, [])

  const getTramite = async () => {
    const res = await axios.get(URIVB)
    setVistoBueno(res.data)
  }


  return (
    <>

      {vistoBueno.length > 0
        ?
        <MaterialTable
          title={"Visto Bueno"}
          columnas={columnsVistoBueno}
          data={datos}
          path={'vistoBuenoForm'}
          editButton={'editVistoBueno'}
          pdf={'vistobuenoPdf'}
          tipoTramite={'idVistoBueno'}
          ubicacion={'/vistoBueno'}
          tramite={'vistoBueno'}
        />
        :
        <div className='text-4xl text-center pt-8 pb-8'>

          <p className='underline'>Visto Bueno</p>
          <p className='pt-48 pb-20'>Aún no has creado ningún visto bueno</p>
          <Link to='/vistoBuenoForm'>
            <button className='text-2xl bg-blue-500 w-32 rounded-lg p-2 text-white hover:bg-blue-800' title="Crear uso de suelo">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
        </div>
      }
    </>
  )
}